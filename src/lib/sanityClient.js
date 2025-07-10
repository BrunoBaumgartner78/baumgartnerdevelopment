import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Konfiguration - passe ggf. deine Projekt-ID und Dataset an (aus .env)
const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'deineProjectId',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-01-01', // oder aktuelles Datum
  useCdn: process.env.NODE_ENV === 'production', // für schnellere Daten im Prod
}

// Sanity Client instanziieren
export const sanityClient = createClient(config)

// URL Builder für Bilder
const builder = imageUrlBuilder(sanityClient)

// Hilfsfunktion, um Bild-URLs zu erstellen
export function urlFor(source) {
  return builder.image(source)
}
