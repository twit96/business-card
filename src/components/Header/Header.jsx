import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>Tyler Wittig</h1>
      <p className={styles.title}>Systems Analyst</p>
      <p className={styles.org}>Wharton County Junior College</p>
    </header>
  );
}
