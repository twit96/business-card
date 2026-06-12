import React from 'react'
import styles from './ContactList.module.css'
import ContactLink from '../ContactLink'

import { categoryOrder, contacts } from '../../data/contacts'
import { intros, defaultIntro } from '../../data/intros'

export default function ContactList() {
  const params = new URLSearchParams(window.location.search)
  const { subject, body } = intros[params.get('intro')] ?? defaultIntro

  const buildHref = ({ id, href }) => {
    if (href.startsWith('mailto:')) {
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
      {categoryOrder.map(({ key, label }) => {
        const group = contacts.filter(c => c.category === key)
        if (!group.length) return null
        return (
          <React.Fragment key={key}>
            <p className={styles.categoryLabel}>
              <span>{label}</span>
            </p>
            <div className={styles.linkGroup}>
              {renderLinks(group)}
            </div>
          </React.Fragment>
        )
      })}
    </nav>
  )
}
