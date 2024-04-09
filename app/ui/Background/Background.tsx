'use client'

import clsx from 'clsx/lite'
import { ReactElement, useEffect, useRef } from 'react'
import styles from './Background.module.css'

export default function Background() {
  const circleRef = useRef<ReactElement>(null)

  useEffect(() => {
    const el = document.querySelector('main')

    const handleScroll = () => {
      const top = el.scrollTop * 0.5
      circleRef.current.style.top = `${top}px`
    }

    el?.addEventListener('scroll', handleScroll)

    return () => {
      el?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.base}>
      <div className={clsx(styles.circle, 'shadow')} ref={circleRef} />
      <div className={styles.bar} />
    </div>
  )
}
