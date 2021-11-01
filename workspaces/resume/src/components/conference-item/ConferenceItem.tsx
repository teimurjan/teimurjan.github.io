import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { theme } from '@teimurjan/utils'

const styles = StyleSheet.create({
  conference: {
    flexDirection: 'row',
  },
  publicationLink: {
    color: theme.colors.resume.black,
    textDecoration: 'none',
  },
  conferenceTitle: {
    color: theme.colors.resume.darkGrey,
  },
  listStyleDisc: {
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: theme.colors.resume.black,
    marginRight: 5,
    marginTop: 5,
  },
})

interface Props {
  topic: string
  title: string
  style?: Record<string, unknown>
}

const ConferenceItem = ({ topic, title, style = {} }: Props) => {
  return (
    <View style={{ ...style, ...styles.conference }}>
      <View style={styles.listStyleDisc} />
      <View>
        <Text>{topic}</Text>
        <Text style={styles.conferenceTitle}>{title}</Text>
      </View>
    </View>
  )
}

export default ConferenceItem
