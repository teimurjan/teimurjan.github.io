import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { theme } from '@teimurjan/utils'
import MapPinIcon from '../map-pin-icon'
import MailIcon from '../mail-icon'
import PhoneIcon from '../mail-icon'

const styles = StyleSheet.create({
  contactsSection: {
    padding: '10px 40px',
    width: '100%',
    backgroundColor: theme.colors.resume.black,
  },
  contactsContainer: {
    width: '100%',
    color: theme.colors.resume.white,
    alignItems: 'center',
    flexDirection: 'row',
  },
  contact: {
    flex: 1,
    color: theme.colors.resume.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactIcon: {
    marginRight: 5,
  },
})

interface Props {
  location: string
  email: string
  phoneNumber: string
}

const Contacts = ({ location, email, phoneNumber }: Props) => (
  <View style={styles.contactsSection}>
    <View style={styles.contactsContainer}>
      <View style={styles.contact}>
        <MapPinIcon style={styles.contactIcon} />
        <Text>{location}</Text>
      </View>
      <View style={styles.contact}>
        <MailIcon style={styles.contactIcon} />
        <Text>{email}</Text>
      </View>
      <View style={styles.contact}>
        <PhoneIcon style={styles.contactIcon} />
        <Text>{phoneNumber}</Text>
      </View>
    </View>
  </View>
)

export default Contacts
