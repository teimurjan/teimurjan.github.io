import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { theme } from '@teimurjan/utils'

const styles = StyleSheet.create({
  educationDates: {
    color: theme.colors.resume.darkGrey,
  },
  educationSchool: {
    color: theme.colors.resume.darkGrey,
  },
  education: {},
  educationDegree: {
    margin: '1.25px 0',
  },
})

interface Props {
  dates: string
  degree: string
  school: string
  style?: Record<string, unknown>
}

const EducationItem = ({ dates, degree, school, style = {} }: Props) => {
  return (
    <View style={{ ...style, ...styles.education }}>
      <Text style={styles.educationDates}>{dates}</Text>
      <Text style={styles.educationDegree}>{degree}</Text>
      <Text style={styles.educationSchool}>{school}</Text>
    </View>
  )
}

export default EducationItem
