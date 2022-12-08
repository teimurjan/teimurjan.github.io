import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { theme } from '@teimurjan/utils'

const styles = StyleSheet.create({
  profileTitle: {
    color: theme.colors.resume.black,
    fontSize: 16,
    textDecoration: 'underline',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 12,
  },
  profileText: {
    textAlign: 'center',
  },
})

interface Props {
  title: string
  text: string
}

const Profile = ({ title, text }: Props) => {
  return (
    <View>
      <Text style={styles.profileTitle}>{title}</Text>
      <Text style={styles.profileText}>{text}</Text>
    </View>
  )
}

export default Profile
