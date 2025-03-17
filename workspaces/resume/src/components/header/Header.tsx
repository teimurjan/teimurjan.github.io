import { Text, View, StyleSheet } from '@react-pdf/renderer'
import Contacts from '../contacts'

const styles = StyleSheet.create({
  header: {
    width: '100%',
    fontFamily: 'Helvetica',
    padding: '16px 32px',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 20,
  },
  headerSubtitle: { fontSize: 14, marginTop: 8 },
})

interface Props {
  title: string
  subtitle: string
  location: string
  email: string
  phoneNumber: string
}

const Header = ({ title, subtitle, location, email, phoneNumber }: Props) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>

      <Contacts location={location} email={email} phoneNumber={phoneNumber} />
    </View>
  )
}

export default Header
