import { Storyblok } from "./storyblokClient";

export function getPreviewPageBySlug(slug: string) {
  return Storyblok.getStory(slug);
}
