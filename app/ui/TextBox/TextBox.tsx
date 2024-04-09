'use client'
import styles from './TextBox.module.css'

import Button from '@/app/ui/Button/Button'
import SavedUrlsButton from '@/app/ui/SavedUrls/SavedUrlsButton/SavedUrlsButton'
import clsx from 'clsx'
import { useState } from 'react'

import PasteIcon from '@/app/assets/paste.svg?react'
import useKeyPress from '@/app/hooks/useKeyPress'
import Hint from '@/app/ui/Hint/Hint'

export default function TextBox() {
  const [input, setInput] = useState('')
  const [error, setError] = useState()

  const handlePasteContent = () => {
    navigator.clipboard.readText().then((text) => setInput(text))
  }

  const handleRaiseError = (error) => {
    setError(error)

    setTimeout(() => {
      setError(undefined)
    }, 3000)
  }

  const handleShort = () => {
    handleRaiseError('You entered an invalid URL. Please try again.')
  }

  useKeyPress({
    targetKey: 'Enter',
    onKeyPress: handleShort
  })

  useKeyPress({
    onKeyPress: (key) => {
      const input = document.getElementById('source-input')
      console.log('🚀 | input:', input)
      if (input) input.focus()
    }
  })

  return (
    <div className={clsx(styles.base, 'shadow')}>
      <Hint label={error} showAlways={Boolean(error)}>
        <input
          id="source-input"
          type="text"
          autoFocus
          placeholder="Enter or paste the URL to short"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Hint>
      <div className={styles.blink} />
      <div className={styles.buttons}>
        <span className={styles.startButtons}>
          <Button
            onClick={handlePasteContent}
            transparent
            pressHint="Pasted"
            position="bottom"
          >
            <PasteIcon />
            Paste
          </Button>
          <SavedUrlsButton />
        </span>
        <Button onClick={handleShort}>Short</Button>
      </div>
    </div>
  )
}
