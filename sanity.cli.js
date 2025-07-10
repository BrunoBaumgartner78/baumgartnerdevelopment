import { loadEnvConfig } from '@next/env'
import 'dotenv/config'  // Lädt die Variablen aus .env in process.env

const projectDir = process.cwd()
loadEnvConfig(projectDir)
