import { MdEmail as EmailIcon } from 'react-icons/md'
import { FaLinkedin as LinkedinIcon, FaGithub as GithubIcon } from 'react-icons/fa'

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
    id: 'email-freelance',
    href: 'mailto:tylerwittig.work@gmail.com',
    icon: <EmailIcon />,
    label: 'tylerwittig.work@gmail.com',
    copyValue: 'tylerwittig.work@gmail.com',
    category: 'personal',
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/tylerwittig',
    icon: <LinkedinIcon />,
    label: 'linkedin.com/in/tylerwittig',
    category: 'personal',
  },
  {
    id: 'github',
    href: 'https://github.com/twit96',
    icon: <GithubIcon />,
    label: 'github.com/twit96',
    category: 'personal',
  },
];
