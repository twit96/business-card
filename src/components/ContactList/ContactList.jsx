import styles from './ContactList.module.css'
import ContactLink from '../ContactLink'

import { contacts } from '../../data/contacts'
import { intros, defaultIntro } from '../../data/intros'

export default function ContactList() {
  const params = new URLSearchParams(window.location.search)
  const { subject, body } = intros[params.get('intro')] ?? defaultIntro

  const workContacts = contacts.filter(c => c.category === 'work')
  const personalContacts = contacts.filter(c => c.category === 'personal')

  const buildHref = ({ id, href }) => {
    if (id === 'email-work') {
      return `${href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }
    return href
  }

  const renderLinks = (list) => list.map((contact) => (
    <ContactLink
      key={contact.id}
      href={buildHref(contact)}
      icon={contact.icon}
      label={contact.label}
      copyValue={contact.copyValue}
    />
  ))

  return (
    <nav className={styles.list}>
      {renderLinks(workContacts)}
      <hr className={styles.divider} />
      {renderLinks(personalContacts)}
    </nav>
  )
}
