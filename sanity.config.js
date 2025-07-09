import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'

import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yjnl0hq1'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
