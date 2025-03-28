import { Svg, Path, Circle, Styles } from '@react-pdf/renderer'
import theme from '../../theme'

interface Props {
  style?: Styles
}

const MapPinIcon = ({ style }: Props) => (
  <Svg style={style} width="14" height="14" viewBox="0 0 24 24">
    <Path
      stroke={theme.colors.dark3}
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    ></Path>
    <Circle stroke={theme.colors.dark3} cx="12" cy="10" r="3"></Circle>
  </Svg>
)

export default MapPinIcon
