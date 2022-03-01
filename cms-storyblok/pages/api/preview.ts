import type { NextApiRequest, NextApiResponse } from "next";
import { getPreviewPageBySlug } from "@/lib/storyblok";

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.STORYBLOK_PREVIEW_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  let { slug } = req.query;
  if (!slug) {
    slug = "home";
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const page = await getPreviewPageBySlug(slug.toString());

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  const previous = res.getHeader("Set-Cookie");
  //@ts-ignore
  previous?.forEach((cookie: any, index: any) => {
    //@ts-ignore
    previous[index] = cookie.replace("SameSite=Lax", "SameSite=None;Secure");
  });
  //@ts-ignore
  res.setHeader(`Set-Cookie`, previous);

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities

  if (slug === "home") {
    res.writeHead(307, { Location: `/` });
  } else {
    res.writeHead(307, { Location: `/${page?.data.story.slug}` });
  }
  res.end();
}
