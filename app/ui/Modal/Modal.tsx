'use client'

import clsx from 'clsx'
import styles from './Modal.module.css'

import CloseIcon from '@/app/assets/close.svg?react'
import useKeyPress from '@/app/hooks/useKeyPress'

export default function Modal({
  className,
  isOpen,
  handleClose,
  title,
  children
}) {
  useKeyPress({
    targetKey: 'Escape',
    onKeyPress: handleClose,
    condition: isOpen
  })

  return (
    <div
      className={clsx(className, styles.base, isOpen && styles.open)}
      onClick={handleClose}
    >
      <div
        className={clsx(styles.modal, 'shadow')}
        onClick={(ev) => ev.stopPropagation()}
      >
        <header>
          {title && <h2>{title}</h2>}
          <button type="button" title="Cerrar modal" onClick={handleClose}>
            <CloseIcon />
          </button>
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
