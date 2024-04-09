import clsx from 'clsx'
import React, { Fragment } from 'react'
import styles from './Text.module.css'

interface Props {
  as?: React.ComponentType<any>
  alt?: boolean
  serif?: boolean
  children: React.ReactNode
}

export default function Text({
  as: Tag = Fragment,
  alt,
  serif,
  children
}: Props) {
  return (
    <Tag
      className={clsx(styles.base, alt && styles.alt, serif && styles.serif)}
    >
      {children}
    </Tag>
  )
}
