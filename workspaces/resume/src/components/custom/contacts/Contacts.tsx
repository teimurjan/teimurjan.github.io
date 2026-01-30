import { StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  contactsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 2,
  },
  contactIcon: {
    marginLeft: 5,
  },
})

interface Props {
  location?: string
  email: string
  phoneNumber: string
}

const Contacts = ({ location, email, phoneNumber }: Props) => (
  <View style={styles.contactsContainer}>
    {location && (
      <View style={styles.contact}>
        <Text>{location} 📍</Text>
      </View>
    )}
    <View style={styles.contact}>
      <Text>{email} 📫</Text>
    </View>
    <View style={styles.contact}>
      <Text>{phoneNumber} 📞</Text>
    </View>
  </View>
)

export default Contacts
