import styles from './App.module.css'
import Photo from './components/Photo'
import Header from './components/Header'
import ContactList from './components/ContactList'

export default function App() {
  return (
    <main className={styles.card}>
      <Photo />
      <section className={styles.info}>
        <Header />
        <p>
          I program efficient, clean, and maintainable systems for the web and for higher education.
        </p>
        <ContactList />
      </section>
    </main>
  )
}
