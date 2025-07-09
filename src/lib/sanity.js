import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);
