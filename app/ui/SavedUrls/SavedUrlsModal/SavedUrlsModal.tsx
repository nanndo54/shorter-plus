'use client'
import styles from './SavedUrlsModal.module.css'

import { useAppStore } from '@/app/hooks/useAppStore'
import Button from '@/app/ui/Button/Button'
import Modal from '@/app/ui/Modal/Modal'

import CopyIcon from '@/app/assets/copy.svg?react'
import TrashIcon from '@/app/assets/trash.svg?react'

export default function SavedUrlsModal() {
  const { modal, setModal } = useAppStore((state) => state.savedUrlsModal)
  const { isOpen } = modal

  const handleClose = () => {
    setModal({ isOpen: false })
  }

  const savedUrls: URL[] = [
    {
      source: 'Facebook.com',
      shortened: 'nanndo54.dev/s/facebook'
    },
    {
      source: 'Twitter.com',
      shortened: 'nanndo54.dev/s/twitter'
    }
  ]

  return (
    <Modal
      className={styles.modal}
      isOpen={isOpen}
      handleClose={handleClose}
      title="Your saved URLs"
    >
      <ul className={styles.list}>
        {savedUrls.map((url, index) => (
          <li key={index}>
            <div className={styles.description}>
              <h3 href={url.shortened} target="_blank" rel="noreferrer">
                {url.shortened}
              </h3>
              <p>{url.source}</p>
            </div>
            <div className={styles.buttons}>
              <Button pressHint="Saved URL copied" position="bottom">
                Copy
                <CopyIcon />
              </Button>
              <Button pressHint="Saved URL deleted" position="bottom">
                <TrashIcon />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Modal>
  )
}
