import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const sanity = createClient({
  projectId: import.meta.env.VITE_SANITY_ID,
  dataset: "production",
  apiVersion: "2023-12-06",
  useCdn: false,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(sanity);

export const urlFor = (source: string) => builder.image(source);
