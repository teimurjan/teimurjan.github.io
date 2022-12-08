import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { theme } from '@teimurjan/utils'

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.resume.green,
    width: '100%',
    padding: '16px 16px 0 16px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'ShareTechMono',
  },
  headerContainer: {
    width: '100%',
    padding: '10px 40px',
    backgroundColor: theme.colors.resume.white,
  },
  headerTitle: {
    fontSize: 30,
  },
  headerSubtitle: { fontSize: 14, marginTop: 8 },
})

interface Props {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

export default Header
