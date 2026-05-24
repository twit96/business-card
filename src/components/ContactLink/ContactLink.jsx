import styles from './ContactLink.module.css';

export default function ContactLink({ href, icon, label, onClick }) {
  return (
    <a
      href={href}
      className={styles.link}
      onClick={onClick}
      target={href?.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </a>
  );
}
