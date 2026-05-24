import styles from './ContactList.module.css';
import ContactLink from '../ContactLink';

const links = [
  {
    id: 'email-cta',
    href: 'mailto:twittig@wcjc.edu?subject=Nice to meet you&body=Hi Tyler, it was great meeting you.',
    icon: '✉️',
    label: 'Send me an email',
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/tylerwittig',
    icon: '💼',
    label: 'LinkedIn',
  },
  {
    id: 'github',
    href: 'https://github.com/twit96',
    icon: '🐙',
    label: 'GitHub',
  },
];

export default function ContactList() {
  return (
    <nav className={styles.list}>
      {links.map(({ id, href, icon, label }) => (
        <ContactLink key={id} href={href} icon={icon} label={label} />
      ))}
    </nav>
  );
}
