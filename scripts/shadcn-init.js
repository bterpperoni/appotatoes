import { execSync } from 'child_process'
import prompts from 'prompts'
import { boolean } from 'zod'

console.log('🚀 Initialisation de Shadcn UI...')

try {
    execSync('pnpm dlx shadcn-ui@latest init -y', { stdio: 'inherit' })

    const response = await prompts([
        {
            type: 'confirm',
            name: 'install',
            message: 'Souhaites-tu déjà installer des composants Shadcn UI ?',
            instructions: false,
            choices: [
                { title: "Yes", value: true },
                { title: "No", value: false }
            ]
        },
    ])

    if (response.install) {
        import('./shadcn-install-components.js')
            .then(() => {
                console.log('📦 Installation des composants terminée !')
            })
            .catch((err) => {
                console.error('❌ Une erreur est survenue pendant l’installation des composants.')
                console.error(err)
                process.exit(1)
            })
    }

    console.log('✅ Shadcn UI initialisé avec succès et prêt à l\'emploi !')
} catch (err) {
    console.error('❌ Une erreur est survenue pendant l’installation de Shadcn UI.')
    console.error(err)
    process.exit(1)
}
