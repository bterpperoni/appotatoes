// This script is used to clean up the template by removing unnecessary files and folders.
import fs from 'fs'

const foldersToDelete = ['.git', '.next', 'node_modules', 'dist', 'build']
const filesToDelete = ['package-lock.json', 'bun.lockb', 'pnpm-lock.yaml', 'yarn.lock']

for (const folder of foldersToDelete) {
  if (fs.existsSync(folder)) {
    fs.rmSync(folder, { recursive: true, force: true })
    console.log(`🧹 Removed folder: ${folder}`)
  }
}

for (const file of filesToDelete) {
  if (fs.existsSync(file)) {
    fs.rmSync(file)
    console.log(`🧹 Removed file: ${file}`)
  }
}

console.log('✅ Template cleaned successfully!')
