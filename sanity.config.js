import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

console.log('projectId:', import.meta.env.SANITY_STUDIO_PROJECT_ID)
console.log('dataset:', import.meta.env.SANITY_STUDIO_DATASET)

export default defineConfig({
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,
  apiVersion: import.meta.env.SANITY_STUDIO_API_VERSION || '2023-01-01',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
  server: { port: 3333 },
})
