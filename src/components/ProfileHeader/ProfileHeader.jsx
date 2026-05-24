import styles from './ProfileHeader.module.css';
import headshot from '../../assets/headshot.jpg';

export default function ProfileHeader() {
  return (
    <header className={styles.header}>
      <img
        src={headshot}
        alt="Tyler Wittig"
        className={styles.headshot}
        width={1024}
        height={834}
      />
      <div className={styles.identity}>
        <h1 className={styles.name}>Tyler Wittig</h1>
        <p className={styles.title}>Systems Analyst</p>
        <p className={styles.org}>Wharton County Junior College</p>
      </div>
    </header>
  );
}
