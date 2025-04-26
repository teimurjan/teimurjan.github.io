import { Text, View, StyleSheet, Link } from '@react-pdf/renderer'
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
  contactsContainer: {
    flexDirection: 'row',
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

interface Props {
  title: string
  subtitle: string
  location?: string
  email: string
  phoneNumber: string
}

const Header = ({ title, location, email, phoneNumber }: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.contactsContainer}>
        <Text style={styles.contact}>{email}</Text>
        <Text style={styles.divider}>•</Text>
        <Link
          src="https://www.linkedin.com/in/teimur-gasanov"
          style={styles.contact}
        >
          in/teimur-gasanov
        </Link>
        <Text style={styles.divider}>•</Text>
        <Link src={`tel:${phoneNumber}`} style={styles.contact}>
          {phoneNumber}
        </Link>
        {location && (
          <>
            <Text style={styles.divider}>•</Text>
            <Text style={styles.contact}>{location}</Text>
          </>
        )}
      </View>
    </View>
  )
}

export default Header
