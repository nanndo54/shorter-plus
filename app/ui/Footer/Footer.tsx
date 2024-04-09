import Button from '@/app/ui/Button/Button'
import styles from './Footer.module.css'

import EmailIcon from '@/app/assets/email.svg?react'
import GitHubIcon from '@/app/assets/github.svg?react'
import LinkedInIcon from '@/app/assets/linkedin.svg?react'

export default function Footer() {
  return (
    <nav className={styles.base}>
      <span>
        <Button className={styles.icon} transparent>
          <span>🔗</span>
          <span>Shorter Plus</span>
        </Button>
      </span>
      <span>
        <Button className={styles.button}>
          <span>Email</span>
          <EmailIcon />
        </Button>
        <Button className={styles.button}>
          <span>GitHub</span>
          <GitHubIcon />
        </Button>
        <Button className={styles.button}>
          <span>LinkedIn</span>
          <LinkedInIcon />
        </Button>
      </span>
    </nav>
  )
}
