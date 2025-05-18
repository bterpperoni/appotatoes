import { sleep } from 'bun'
import fs from 'fs'

if (!fs.existsSync('README.md')) {
  fs.writeFileSync('README.md', `# C'est quoi tu bois ?\n\n...`, 'utf-8')
  console.log('📘 README généré.')
}

if (!fs.existsSync('./src/components/theme-provider.tsx')) {
  console.warn('⚠️ ThemeProvider manquant. Ajoute-le manuellement !')
} else {
  console.log('🎨 ThemeProvider détecté.')
}

console.log('🎉 Setup terminé. Bon code ( ﾉ ﾟｰﾟ)ﾉ !')
sleep(5000)
console.log("C'est fini barrez-vous (ง •_•)ง")
