import styles from './Photo.module.css';
import photo from '../../assets/headshot.jpg';

export default function Photo() {
  return (
    <div className={styles.wrapper}>
      <img 
        src={photo}
        alt="Tyler Wittig"
        width={1024}
        height={834}
        className={styles.photo}
      />
      <WaveDividerBottom />
      <WaveDividerRight />
    </div>
  );
}

function WaveDividerBottom() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`${styles.divider} ${styles.dividerBottom}`}
    >
      <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
    </svg>
  );
}

function WaveDividerRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 1440"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`${styles.divider} ${styles.dividerRight}`}
    >
      <path d="M40,0 C80,360 0,1080 40,1440 L80,1440 L80,0 Z" />
    </svg>
  );
}
