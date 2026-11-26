import { Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import { Fragment } from 'react'
import theme from '../../../theme'

const styles = StyleSheet.create({
  header: {
    width: '100%',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 12,
  },
  headline: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    marginTop: 2,
  },
  contactsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 4,
  },
  contact: {
    marginHorizontal: 8,
    fontSize: 10,
    color: theme.colors.dark2,
    textDecoration: 'none',
  },
  divider: {
    fontSize: 10,
    color: theme.colors.dark2,
  },
})

export interface Contact {
  label: string
  href?: string
}

interface Props {
  title: string
  headline?: string
  contacts: Contact[]
}

const Header = ({ title, headline, contacts }: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      {headline && <Text style={styles.headline}>{headline}</Text>}
      <View style={styles.contactsContainer}>
        {contacts.map((contact, index) => (
          <Fragment key={contact.label}>
            {index > 0 && <Text style={styles.divider}>•</Text>}
            {contact.href ? (
              <Link src={contact.href} style={styles.contact}>
                {contact.label}
              </Link>
            ) : (
              <Text style={styles.contact}>{contact.label}</Text>
            )}
          </Fragment>
        ))}
      </View>
    </View>
  )
}

export default Header
