import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { theme } from '@teimurjan/utils'

const styles = StyleSheet.create({
  skill: {},
  skillLabel: {
    marginBottom: 2.5,
  },
  skillProgress: {
    height: 5,
    backgroundColor: theme.colors.resume.dark,
    borderRadius: 5,
    position: 'relative',
    width: '100%',
  },
  skillProgressInner: {
    height: '100%',
    backgroundColor: theme.colors.resume.dark3,
    borderRadius: 5,
    position: 'absolute',
    left: 0,
    top: 0,
  },
})

interface Props {
  title: string
  percentage: number
  style?: Record<string, unknown>
}

const SkillItem = ({ title, percentage, style = {} }: Props) => {
  return (
    <View style={{ ...style, ...styles.skill }}>
      <Text style={styles.skillLabel}>{title}</Text>
      <View style={styles.skillProgress}>
        <View
          style={{
            ...styles.skillProgressInner,
            width: `${percentage}%`,
          }}
        />
      </View>
    </View>
  )
}

export default SkillItem
