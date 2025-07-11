import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Baumgartner Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01',
  basePath: '/studio', // wichtig für Next.js Routing

  plugins: [
    deskTool(),    // <- Das ist der wichtigste Tool
    visionTool(),  // Optional: Sanity Vision Tool
  ],

  schema: {
    types: schemaTypes,
  },
})
