import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { Potato } from '../types/Potato'

type PotatoState = {
  potatoes: Potato[] | null
  setPotastorage: (potatoes: Potato | null) => void
  clearPotastorage: () => void
}

export const usepotatoStore = create<PotatoState>()(
    persist(
        (set) => ({
            potatoes: null,
            setPotastorage: (potatoes) => set({ potatoes: [...(potatoes ? [...[potatoes], potatoes] : [])] }),
            clearPotastorage: () => set({ potatoes: null }),
        }),
        {
            name: 'potato-storage',
            storage: createJSONStorage(() => sessionStorage), 
        }
    )
)
