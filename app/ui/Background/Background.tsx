'use client'

import clsx from 'clsx/lite'
import { useEffect } from 'react'
import styles from './Background.module.css'

export default function Background() {
  useEffect(() => {
    const main = document.querySelector('main')
    if (main == null) return

    const handleScroll = () => {
      const top = main.scrollTop * 0.5
      const circleElement = document.querySelector<HTMLElement>(
        `.${styles.circle}`
      )
      if (circleElement != null)
        circleElement.style.setProperty('top', `${top}px`)
    }

    main?.addEventListener('scroll', handleScroll)

    return () => {
      main?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.base}>
      <div className={clsx(styles.circle, 'shadow')} />
      <div className={styles.bar} />
    </div>
  )
}
