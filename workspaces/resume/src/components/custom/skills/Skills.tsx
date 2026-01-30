import { StyleSheet, Text, View } from '@react-pdf/renderer'
import type { CustomResumeProps } from '../types'

const styles = StyleSheet.create({
  itemMarginBottomSmall: {
    marginBottom: 4,
  },
  skills: {
    flexDirection: 'row',
  },
  skillsCol: {
    flex: 1,
    flexDirection: 'column',
  },
})

const Skills = ({
  skills,
  config = { skills: 'row' },
}: Pick<CustomResumeProps, 'skills' | 'config'>) => {
  return (
    <View style={styles.skills}>
      {config.skills === 'column' ? (
        <>
          <View style={styles.skillsCol}>
            {skills.slice(0, skills.length / 2).map((skill) => (
              <Text key={skill.id} style={styles.itemMarginBottomSmall}>
                {skill.title}
              </Text>
            ))}
          </View>
          <View style={styles.skillsCol}>
            {skills.slice(skills.length / 2).map((skill) => (
              <Text key={skill.id} style={styles.itemMarginBottomSmall}>
                {skill.title}
              </Text>
            ))}
          </View>
        </>
      ) : (
        <View style={styles.skillsCol}>
          <Text>{skills.map((skill) => skill.title).join(', ')}</Text>
        </View>
      )}
    </View>
  )
}

export default Skills
