import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import theme from '../../theme'

const styles = StyleSheet.create({
  page: {
    backgroundColor: theme.colors.light,
    fontFamily: 'Helvetica',
    color: theme.colors.dark3,
    fontSize: 12,
    lineHeight: 1.75,
  },
  container: {
    padding: '32px 72px',
    width: '100%',
    height: '100%',
  },
})

export interface CoverLetterProps {
  children: string
}

const CoverLetter = ({ children }: CoverLetterProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text>{children}</Text>
        </View>
      </Page>
    </Document>
  )
}

export default CoverLetter
