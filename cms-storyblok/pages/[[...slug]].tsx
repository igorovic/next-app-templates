//import Layout from "../components/Layout";
import DynamicComponent from "@/components/storyblok/DynamicComponent";

import { Storyblok, useStoryblok } from "@/lib/storyblok";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from "next";

const Page: NextPage<any> = ({
  story,
  preview,
  locale,
  locales,
  defaultLocale,
}) => {
  //const dispatch = useAppDispatch();
  console.debug("preview enabled %s", preview, { ns: "global" });
  const enableBridge = preview; // load the storyblok bridge everywhere
  // use the preview variable to enable the bridge only in preview mode
  // const enableBridge = preview;
  story = useStoryblok(story, enableBridge, locale);

  /* useLayoutEffect(() => {
    dispatch(setPreview(preview));
  }); */

  return (
    <div className="container">
      <DynamicComponent blok={story.content} />
    </div>
  );
};
{
  /* <Layout locale={locale} locales={locales} defaultLocale={defaultLocale}> */
}
/* </Layout> */
export default Page;

const getStaticProps: GetStaticProps = async ({
  locale,
  locales,
  defaultLocale,
  params,
  preview = false,
}) => {
  let slug = "home";
  if (params && Array.isArray(params.slug)) {
    slug = params.slug.join("/");
  }
  //params?.slug ? params.slug.join("/")

  let sbParams = {
    version: "draft", // or "published"
    //resolve_relations: ["ProductCard.misc", "selected-posts.posts"],
    language: locale,
  };

  if (preview) {
    sbParams.version = "draft";
    //@ts-ignore
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);
  console.debug("getStaticProps %o", data);
  return {
    props: {
      story: data ? data.story : false,
      preview,
      locale,
      locales,
      defaultLocale,
    },
    revalidate: 3600, // revalidate every hour
  };
};

const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  let { data } = await Storyblok.get("cdn/links/");
  console.debug("getStaticPaths %s %o", locales, data);
  let paths: GetStaticPathsResult["paths"] = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
    if (slug === "home") splittedSlug = false;

    // create additional languages
    for (const locale of locales || []) {
      paths.push({ params: { slug: splittedSlug }, locale });
    }
  });
  //console.debug("%s", paths);
  return {
    paths: paths,
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };
