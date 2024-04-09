'use client'

import { useAppStore } from '@/app/hooks/useAppStore'
import Button from '@/app/ui/Button/Button'

import SuitcaseIcon from '@/app/assets/suitcase.svg?react'

export default function SavedUrlsButton() {
  const { setModal } = useAppStore((state) => state.savedUrlsModal)

  const handleOpen = () => {
    setModal({ isOpen: true })
  }

  return (
    <Button transparent onClick={handleOpen}>
      <SuitcaseIcon />
      Saved URLs
    </Button>
  )
}
