// sanity.config.js (SERVER-ONLY)
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/sanity/schemaTypes'




export default defineConfig({
  name: 'default',
  title: 'Baumgartner Development',

  projectId: 'yjnl0hq1',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
