import { Text, View, StyleSheet, Styles } from '@react-pdf/renderer'
import theme from '../../theme'

const styles = StyleSheet.create({
  skill: {},
  skillLabel: {
    marginBottom: 4,
  },
  skillProgress: {
    height: 4,
    backgroundColor: theme.colors.dark2,
    borderRadius: 4,
    position: 'relative',
    width: '100%',
  },
  skillProgressInner: {
    height: '100%',
    backgroundColor: theme.colors.dark3,
    borderRadius: 4,
    position: 'absolute',
    left: 0,
    top: 0,
  },
})

interface Props {
  title: string
  percentage: number
  style?: Styles
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
