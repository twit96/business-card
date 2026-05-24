import styles from './App.module.css'
import ProfileHeader from './components/ProfileHeader'
import Bio from './components/Bio'
import ContactList from './components/ContactList'

export default function App() {
  return (
    <div className={styles.page}>
      <ProfileHeader />
      <Bio />
      <ContactList />
    </div>
  )
}