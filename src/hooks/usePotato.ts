import { potatoSchema } from '@/lib/zod/schemotato';
import type { Potato } from '@/types/Potato';
import { useState } from 'react';

const potatoNames = [
    'Yukon Gold',
    'Russet',
    'Red Bliss',
    'Fingerling',
    'Purple Majesty',
    'Kennebec',
    'Adirondack Blue',
    'La Ratte',
    'Charlotte',
    'Maris Piper',
    'Desiree',
    'Bintje',
    'King Edward',
    'Jersey Royal',
    'Austrian Crescent',
    'All Blue',
];

const potatoHeads = [
    '(◕‿◕)',
    '༼ ¬‿¬ ༽',
    '༼╹◡╹༽',
    '༼•_•༽',
    '༼¬‿¬༽',
    '༼ಠ_ಠ༽',
    '༼ʘ‿ʘ༽',
    '༼⊙_☉༽',
    '༼/°-°|༽',
    '༼•̀ᴗ-༽',
    '༼ ◕ ༽',
    '༼ ͡° ͜ʖ ͡° ༽',

];

const potatoBodies = [
  `_____
  /     \\
 /       \\
|ლ {head} |ლ
|          |
 \\       /
  \\_____/
`,
  ` _______
   /       \\
  /         \\
ლ| {head} ლ||
 |           |
  \\         /
   \\_______/
`,
  `     ______
      /      \\
     /        \\
(\___|  {head} |___/)
|____|         |____|
     \\       /
      \\_____/
`,
  `   ____
    //    \\
   //      \\   
|__| {head} |__/)
   |        |
   \\     //
    \\° °//
`,
  `   _______
     /       \\  ___|
 ___|  {head} \\/
/  |           |
   |           |
    \\         /
     \\_______/
     ___/  /°\__
`,
`        \\_____/
        /       \\
       /  {head} \\ 
 ______|         //   ___
/°-°|  |_        |___/°-°|
        \\       /
         \\_____/
       ___/  \___`
];

/**
 * @function usePotato
 * @description This is a hook to generates random potato object.
 * @returns {Potato} A random potato object with id, name, head, and body properties
 * 
 * @example const {potato, regeneratePotato } = usePotato();
 */
export function usePotato(): { potato: Potato; regeneratePotato: () => void } {

    const [potato, setPotato] = useState<Potato>(generateRandomPotato);

    /**
     * @function generateRandomPotato
     * @description Generates a random potato object with id, name, head, and body properties
     */
    function generateRandomPotato(): Potato {
        const name = potatoNames[Math.floor(Math.random() * potatoNames.length)];
        const head = potatoHeads[Math.floor(Math.random() * potatoHeads.length)];
        const bodyTemplate = potatoBodies[Math.floor(Math.random() * potatoBodies.length)] || '';
        const body = bodyTemplate.replace('{head}', head ?? '');
        const potato = {
            id: crypto.randomUUID(),
            name: name,
            head: head,
            body: body,
        }

        if (!validatePotato(potato)) {
          console.warn('You got no potato!'); 
          return {} as Potato;
        }

        return {
            id: crypto.randomUUID(),
            name,
            head,
            body,
        } as Potato;
    }


    /** 
    *  @function validatePotato check if the potato is valid with the zod schema.
    */
    function validatePotato(potato: Potato): boolean {
        const result = potatoSchema.safeParse(potato);
        if (!result.success) {
            console.error('Invalid potato:', result.error.format());
            return false;
        }
        return true;
    }


/**
 * @function regeneratePotato will generate a new potato with a new name, head, and body.
 */
    const regeneratePotato = (): void => setPotato(generateRandomPotato());

    return { potato, regeneratePotato }
}