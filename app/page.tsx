import Background from '@/app/ui/Background/Background'
import Footer from '@/app/ui/Footer/Footer'
import SavedUrlsModal from '@/app/ui/SavedUrls/SavedUrlsModal/SavedUrlsModal'
import Text from '@/app/ui/Text/Text'
import TextBox from '@/app/ui/TextBox/TextBox'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.base}>
      <SavedUrlsModal />
      <Background />
      <section>
        <span>
          <Text as="h1">
            Short your URL{' '}
            <Text as="span" alt serif>
              at the speed of light
            </Text>
          </Text>
          <Text as="p" alt>
            Get as many free short URLs as you want
          </Text>
        </span>
        <TextBox />
      </section>
      <Footer />
    </main>
  )
}
