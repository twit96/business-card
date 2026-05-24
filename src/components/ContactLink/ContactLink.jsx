import { useState } from 'react';
import styles from './ContactLink.module.css';
import { Copy, ClipboardCheck } from 'lucide-react';

export default function ContactLink({ href, icon, label, copyable }) {

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(label);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className={styles.wrapper}>

      <a
        href={href}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.icon}>{icon}</span>
        <span className={styles.label}>{label}</span>
      </a>

      {copyable && (
        <button
          onClick={handleCopy}
          className={styles.copyButton}
          aria-label={`Copy ${label}`}
          title={`Copy ${label}`}
        >
          {copied ? (
            <ClipboardCheck color="var(--text)" size="1rem" />
          ) : (
            <Copy color="var(--text)" size="1rem" />
          )}
        </button>
      )}

    </div>
  );
}
