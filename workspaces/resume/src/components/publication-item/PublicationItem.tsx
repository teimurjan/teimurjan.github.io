import { Text, View, StyleSheet, Link } from '@react-pdf/renderer'
import { theme } from '@teimurjan/utils'

const styles = StyleSheet.create({
  publication: {
    flexDirection: 'row',
  },
  publicationText: {},
  publicationLink: {
    color: theme.colors.resume.black,
    textDecoration: 'none',
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
  link: string
  title: string
  style?: Record<string, unknown>
}

const PublicationItem = ({ link, title, style = {} }: Props) => {
  return (
    <View style={{ ...style, ...styles.publication }}>
      <View style={styles.listStyleDisc} />
      <Link src={link} style={styles.publicationLink}>
        <Text style={styles.publicationText}>{title}.</Text>
      </Link>
    </View>
  )
}

export default PublicationItem
