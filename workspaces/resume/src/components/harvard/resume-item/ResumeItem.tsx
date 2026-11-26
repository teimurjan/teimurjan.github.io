import { Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import type { Style } from '@react-pdf/types'
import Html from 'react-pdf-html'
import theme from '../../../theme'
import { htmlStylesheet } from '../styles/layout'

const styles = StyleSheet.create({
  resumeItem: {
    marginBottom: 4,
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    flexShrink: 1,
  },
  dates: {
    color: theme.colors.dark2,
    fontSize: 10,
    textAlign: 'right',
    flexShrink: 0,
  },
  subtitle: {
    color: theme.colors.dark2,
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    marginTop: 2,
    textTransform: 'capitalize',
  },
  note: {
    color: theme.colors.dark2,
    fontSize: 9,
    marginTop: 1,
  },
  description: {
    fontSize: 10,
    textAlign: 'justify',
    marginTop: 2,
  },
})

interface Props {
  dates?: string
  title: string
  subtitle?: string | URL
  note?: string
  description?: string
  stylesheet?: typeof htmlStylesheet
  style?: Style | Style[]
}

const ResumeItem = ({
  dates,
  title,
  subtitle,
  note,
  description,
  stylesheet = htmlStylesheet,
  style = {},
}: Props) => {
  return (
    <View style={{ ...styles.resumeItem, ...style }}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.subtitleContainer}>
        {typeof subtitle === 'string' && <Text style={styles.subtitle}>{subtitle}</Text>}
        {typeof subtitle === 'object' && !!subtitle && (
          <Link src={subtitle.toString()} style={styles.subtitle}>
            {subtitle.hostname.replace('www.', '').split('.')[0]}
          </Link>
        )}

        {dates && <Text style={styles.dates}>{dates}</Text>}
      </View>

      {note && (
        <Html style={styles.note} stylesheet={stylesheet}>
          {note}
        </Html>
      )}

      {description && (
        <Html style={styles.description} stylesheet={stylesheet}>
          {description}
        </Html>
      )}
    </View>
  )
}

export default ResumeItem
