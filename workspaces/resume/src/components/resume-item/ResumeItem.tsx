import { Text, View, StyleSheet } from '@react-pdf/renderer'
import Html from 'react-pdf-html'
import { theme } from '@teimurjan/utils'

const styles = StyleSheet.create({
  experienceTitle: {
    fontFamily: 'Helvetica-Bold',
  },
  experienceDates: {
    color: theme.colors.resume.dark2,
    fontFamily: 'Helvetica-Bold',
  },
  experienceSubtitle: {
    color: theme.colors.resume.dark2,
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
  subtitle?: string
  description?: string
  style?: Record<string, unknown>
}

const ResumeItem = ({
  dates,
  title,
  subtitle,
  description,
  style = {},
}: Props) => {
  return (
    <View style={style}>
      <View style={styles.experienceTitleDates}>
        <Text style={styles.experienceTitle}>{title}</Text>
        {dates && <Text style={styles.experienceDates}>{dates}</Text>}
      </View>
      {subtitle && <Text style={styles.experienceSubtitle}>{subtitle}</Text>}
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
