
import prompts from 'prompts'
import { execSync } from 'child_process'
import fs from 'fs'

const response = await prompts({
  type: 'select',
  name: 'manager',
  message: 'Quel gestionnaire de paquets veux-tu utiliser ?',
  choices: [
    { title: 'bun', value: 'bun' },
    { title: 'pnpm', value: 'pnpm' }
  ],
})

const lockFiles = {
  bun: 'bun.lockb',
  pnpm: 'pnpm-lock.yaml',
}

for (const lf of Object.values(lockFiles)) {
  if (fs.existsSync(lf)) fs.rmSync(lf)
}

if (response.manager === 'bun') {
  console.log('📦 Installation avec Bun...')
  execSync('bun install', { stdio: 'inherit' })
} else {
  console.log('📦 Installation avec pnpm...')
  execSync('pnpm install', { stdio: 'inherit' })
}

console.log(`✅ ${response.manager} prêt à l’emploi !`)
console.log('📦 Installation des dépendances...'

)

import './postinstall.js'
console.log('📦 Installation terminée !')