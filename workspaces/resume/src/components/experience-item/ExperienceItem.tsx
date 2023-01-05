import { Text, View, StyleSheet } from '@react-pdf/renderer'
import Html from 'react-pdf-html'
import { theme } from '@teimurjan/utils'

const styles = StyleSheet.create({
  experienceDates: {
    color: theme.colors.resume.dark2,
  },
  experienceCompany: {
    color: theme.colors.resume.dark2,
    textDecoration: 'underline',
  },
  experience: {
    position: 'relative',
  },
  experiencePositionCompany: {
    flexDirection: 'row',
    margin: '1.25px 0',
  },
  experienceIcon: {
    position: 'absolute',
    left: -20,
    top: 2.5,
    border: `2px solid ${theme.colors.resume.accent}`,
    borderRadius: 5.5,
    width: 11,
    height: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.resume.light,
  },
  experienceIconInner: {
    borderRadius: 2.5,
    width: 5,
    height: 5,
    backgroundColor: theme.colors.resume.accent,
  },
  experienceLine: {
    position: 'absolute',
    left: 15,
    top: 0,
    height: '100%',
    width: 1,
    backgroundColor: theme.colors.resume.dark3,
  },
  experienceDescription: {
    fontSize: 10,
    backgroundColor: theme.colors.resume.dark2,
  },
})

interface Props {
  dates: string
  position: string
  company: string
  description: string
  style?: Record<string, unknown>
}

const ExperienceItem = ({
  dates,
  position,
  company,
  description,
  style = {},
}: Props) => {
  return (
    <View style={{ ...style, ...styles.experience }}>
      <View style={styles.experienceIcon}>
        <View style={styles.experienceIconInner} />
      </View>
      <Text style={styles.experienceDates}>{dates}</Text>
      <View style={styles.experiencePositionCompany}>
        <Text>{position}&nbsp;</Text>
        <Text style={styles.experienceCompany}>at {company}</Text>
      </View>
      <Html
        style={styles.experienceDescription}
        stylesheet={{
          ul: {
            margin: '5px 0 0 -20px',
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
    </View>
  )
}

export default ExperienceItem
