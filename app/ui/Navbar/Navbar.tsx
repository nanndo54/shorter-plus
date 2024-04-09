import Button from '@/app/ui/Button/Button'
import styles from './Navbar.module.css'

import AboutIcon from '@/app/assets/about.svg?react'

export default function Navbar() {
  return (
    <nav className={styles.base}>
      <span>
        <Button className={styles.icon} transparent href="/">
          <span>🔗</span>
          <span>Shorter Plus</span>
        </Button>
      </span>
      <span>
        <Button className={styles.button} href="/about">
          <span>About</span>
          <AboutIcon />
        </Button>
      </span>
    </nav>
  )
}
