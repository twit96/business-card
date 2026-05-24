import styles from './ContactList.module.css';
import ContactLink from '../ContactLink';

import { MdEmail as EmailIcon } from 'react-icons/md';
import { 
  FaLinkedin as LinkedinIcon, 
  FaGithub as GithubIcon
} from "react-icons/fa";

const links = [
  {
    id: 'email-cta',
    href: 'mailto:WittigT@wcjc.edu?subject=Nice to meet you&body=Hi Tyler, it was great meeting you.',
    icon: <EmailIcon />,
    label: 'WittigT@wcjc.edu',
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/tylerwittig',
    icon: <LinkedinIcon />,
    label: 'linkedin.com/in/tylerwittig',
  },
  {
    id: 'github',
    href: 'https://github.com/twit96',
    icon: <GithubIcon />,
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
