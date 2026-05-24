import styles from './ContactList.module.css';
import ContactLink from '../ContactLink';
import {
  Mail,
  BriefcaseBusiness  /* LinkedIn */,
  Braces /* GitHub */,
} from 'lucide-react';

const links = [
  {
    id: 'email-cta',
    href: 'mailto:WittigT@wcjc.edu?subject=Nice to meet you&body=Hi Tyler, it was great meeting you.',
    icon: <Mail color="var(--text)" size="1rem" />,
    label: 'WittigT@wcjc.edu',
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/tylerwittig',
    icon: <BriefcaseBusiness color="var(--text)" size="1rem" />,
    label: 'linkedin.com/in/tylerwittig',
  },
  {
    id: 'github',
    href: 'https://github.com/twit96',
    icon: <Braces color="var(--text)" size="1rem" />,
    label: 'github.com/twit96',
  },
];

export default function ContactList() {
  return (
    <nav className={styles.list}>
      {links.map(({ id, href, icon, label }) => (
        <ContactLink
          key={id}
          href={href}
          icon={icon}
          label={label}
          copyable={href?.startsWith('mailto')}  /* make email copyable */
        />
      ))}
    </nav>
  );
}
