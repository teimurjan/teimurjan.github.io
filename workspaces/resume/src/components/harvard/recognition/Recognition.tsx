import { Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import theme from '../../../theme'
import type { HarvardResumeProps } from '../types'

export type Props = Pick<HarvardResumeProps, 'publications' | 'conferences'>

const styles = StyleSheet.create({
  container: {
    lineHeight: 0.64,
  },
  award: {
    fontFamily: 'Helvetica-Bold',
  },
  link: {
    color: theme.colors.dark3,
  },
})

const Recognition = ({ publications, conferences }: Props) => {
  return (
    <View style={styles.container}>
      <Text>
        • Published {publications.length} technical articles earning HackerNoon{' '}
        <Text style={styles.award}>Top Story</Text> Badge,{' '}
        <Text style={styles.award}>2x The TechBeat Top 20</Text>, Toptal{' '}
        <Text style={styles.award}>Verified Expert</Text> Badge.
      </Text>
      <Text>• Speaker at {conferences.length} conferences.</Text>
      <Text>
        More at:{' '}
        <Link style={styles.link} src="https://teimurjan.dev#activity">
          teimurjan.dev
        </Link>
      </Text>
    </View>
  )
}

export default Recognition
