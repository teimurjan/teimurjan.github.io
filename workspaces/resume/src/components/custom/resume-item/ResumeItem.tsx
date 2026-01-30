import { Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import type { Style } from '@react-pdf/types'
import Html from 'react-pdf-html'
import theme from '../../../theme'

const styles = StyleSheet.create({
  experienceTitle: {
    fontFamily: 'Helvetica-Bold',
  },
  experienceDates: {
    color: theme.colors.dark2,
    fontFamily: 'Helvetica-Bold',
  },
  experienceSubtitle: {
    color: theme.colors.dark2,
    fontFamily: 'Helvetica-Bold',
    marginTop: '2px',
    textTransform: 'capitalize',
  },
  experienceTitleDates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  experienceDescription: {
    fontSize: 10,
  },
})

interface Props {
  dates?: string
  title: string
  subtitle?: string | URL
  description?: string
  style?: Style | Style[]
}

const ResumeItem = ({ dates, title, subtitle, description, style = {} }: Props) => {
  return (
    <View style={style}>
      <View style={styles.experienceTitleDates}>
        <Text style={styles.experienceTitle}>{title}</Text>
        {dates && <Text style={styles.experienceDates}>{dates}</Text>}
      </View>
      {typeof subtitle === 'string' && <Text style={styles.experienceSubtitle}>{subtitle}</Text>}
      {typeof subtitle === 'object' && !!subtitle && (
        <Link src={subtitle.toString()} style={styles.experienceSubtitle}>
          {subtitle.hostname.replace('www.', '').split('.')[0]}
        </Link>
      )}
      {description && (
        <Html
          style={styles.experienceDescription}
          stylesheet={{
            ul: {
              margin: '4px 0 0 -20px',
            },
            div: {
              margin: 0,
            },
            p: {
              margin: 0,
            },
          }}
        >
          {description}
        </Html>
      )}
    </View>
  )
}

export default ResumeItem
