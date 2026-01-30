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
  item: {
    marginBottom: 2,
  }
})

const Recognition = ({ publications, conferences }: Props) => {
  return (
    <View style={styles.container}>
       <Text style={styles.item}>
        • Creator of{' '}
        <Link style={styles.link} src="https://blazediff.dev">
          BlazeDiff
        </Link>
        , a state-of-the-art image diffing engine achieving <Text style={styles.award}>industry-leading performance</Text>.
      </Text>
      <Text style={styles.item}>
        • Published {publications.length} technical articles earning HackerNoon{' '}
        <Text style={styles.award}>Top Story</Text> Badge,{' '}
        <Text style={styles.award}>2x The TechBeat Top 20</Text>, Toptal{' '}
        <Text style={styles.award}>Verified Expert</Text> Badge.
      </Text>
      <Text style={styles.item}>• Speaker at {conferences.length} conferences.</Text>
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
