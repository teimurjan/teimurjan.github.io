import { Text, View, StyleSheet } from '@react-pdf/renderer'
import type { Style } from '@react-pdf/types'

const styles = StyleSheet.create({
  skills: {
    flexDirection: 'row',
  },
  skillsCol: {
    flex: 1,
    flexDirection: 'column',
  },
  skillItem: {
    textAlign: 'center',
  },
  skillRowContainer: {
    textAlign: 'center',
  },
  skillRow: {
    fontStyle: 'italic',
  },
})

interface Props {
  skills: {
    title: string
  }[]
  style?: Style | Style[]
}

const Skills = ({ skills, style = {} }: Props) => {
  return (
    <View style={{ ...styles.skills, ...style }}>
      <View style={styles.skillRowContainer}>
        <Text style={styles.skillRow}>
          {skills.map((skill) => skill.title).join(', ')}
        </Text>
      </View>
    </View>
  )
}

export default Skills
