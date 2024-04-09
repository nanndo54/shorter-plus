import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAppStore = create(
  persist(
    (set) => ({
      savedUrlsModal: {
        modal: {},
        setModal: (modal) =>
          set((state) => ({
            savedUrlsModal: { ...state.savedUrlsModal, modal }
          }))
      }
    }),
    {
      name: 'shorter-plus-store',
      partialize: ({ theme }) => ({
        theme
      })
    }
  )
)
