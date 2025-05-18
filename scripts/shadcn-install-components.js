#!/usr/bin/env node
import { execSync } from 'child_process'
import prompts from 'prompts'

const allComponents = [
    'accordion',
    'alert',
    'alert-dialog',
    'avatar',
    'badge',
    'button',
    'card',
    'checkbox',
    'collapsible',
    'dialog',
    'dropdown-menu',
    'hover-card',
    'input',
    'label',
    'menubar',
    'popover',
    'progress',
    'radio-group',
    'scroll-area',
    'select',
    'separator',
    'sheet',
    'slider',
    'switch',
    'table',
    'tabs',
    'textarea',
    'toggle',
    'tooltip'
]

console.log("🛠️ Initialisation de l'installation des composants Shadcn UI")


const response = await prompts([
    {
        type: 'multiselect',
        name: 'components',
        message: 'Quels composants Shadcn veux-tu installer ?',
        instructions: false,
        choices: allComponents.map(c => ({ title: c, value: c })),
        min: 1,
    },
])

if (response.components.length === 0) {
    console.log('❌ Aucuns composants sélectionnés. Abandon de l\'installation.')
    process.exit(1)
}

for (const component of response.components) {
    console.log(`📦 Ajout du composant: ${component}...`)
    execSync(`pnpm dlx shadcn-ui@latest add ${component}`, { stdio: 'inherit' })
    console.log(`...✅ ${component} ajouté avec succès !`)
}
