import StoryblokClient from "storyblok-js-client";

export const Storyblok = new StoryblokClient({
  // TODO: create a separate production storyblok client with another token
  accessToken: String(process.env.STORYBLOK_PREVIEW_TOKEN),
  cache: {
    clear: "auto",
    type: "memory",
  },
});
