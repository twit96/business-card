import { MdEmail as EmailIcon } from 'react-icons/md'
import { FaLinkedin as LinkedinIcon, FaGithub as GithubIcon } from 'react-icons/fa'

export const categoryOrder = [
  { key: 'work', label: 'Work' },
  { key: 'personal', label: 'Personal' },
]

export const contacts = [
  {
    id: 'email-work',
    href: 'mailto:WittigT@wcjc.edu',
    icon: <EmailIcon />,
    label: 'WittigT@wcjc.edu',
    copyValue: 'WittigT@wcjc.edu',
    category: 'work',
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/tylerwittig',
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
    category: 'personal',
  },
  {
    id: 'github',
    href: 'https://github.com/twit96',
    icon: <GithubIcon />,
    label: 'GitHub',
    category: 'personal',
  },
  {
    id: 'email-freelance',
    href: 'mailto:tylerwittig.work@gmail.com',
    icon: <EmailIcon />,
    label: 'tylerwittig.work@gmail.com',
    copyValue: 'tylerwittig.work@gmail.com',
    category: 'personal',
  },
];
