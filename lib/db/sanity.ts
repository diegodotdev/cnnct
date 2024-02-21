import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: "production",
  apiVersion: "2023-12-06",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(sanity);

export const urlFor = (source: string) => builder.image(source);
