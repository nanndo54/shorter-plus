import { create } from 'zustand'

interface SavedUrlsModal {
  modal: {
    isOpen: boolean
  }
  setModal: (modal: { isOpen: boolean }) => void
}

interface State {
  savedUrlsModal: SavedUrlsModal
}

export const useAppStore = create<State>((set) => ({
  savedUrlsModal: {
    modal: {
      isOpen: false
    },
    setModal: (modal) =>
      set((state) => ({
        savedUrlsModal: { ...state.savedUrlsModal, modal }
      }))
  }
}))
