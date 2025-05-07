import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type Store = {
  count: number
  inc: () => void
}

export const dataStore = create<Store>()(
  persist((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
  }), {
    name: 'Count Storage',
    storage: createJSONStorage(() => localStorage)
  })
)