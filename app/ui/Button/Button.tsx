'use client'

import Hint from '@/app/ui/Hint/Hint'
import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './Button.module.css'

interface Props {
  className?: string
  transparent?: boolean
  href?: string
  onClick: () => void
  children: ReactNode
  pressHint?: string
  position?: string
}

export default function Button({
  className,
  transparent,
  onClick,
  href,
  children,
  pressHint,
  position = 'top'
}: Props) {
  const props = {
    className: clsx(className, styles.base, transparent && styles.transparent),
    type: href ? undefined : 'button',
    href,
    onClick: href ? undefined : onClick,
    children
  }

  const childrenElement = href ? <Link {...props} /> : <button {...props} />

  return pressHint ? (
    <Hint showOnClick clickLabel={pressHint} position={position}>
      {childrenElement}
    </Hint>
  ) : (
    childrenElement
  )
}
