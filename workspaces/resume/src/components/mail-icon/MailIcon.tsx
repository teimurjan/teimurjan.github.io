import { Svg, Path, Polyline, Styles } from '@react-pdf/renderer'
import { theme } from '@teimurjan/utils'

interface Props {
  style?: Styles
}

const MailIcon = ({ style }: Props) => (
  <Svg style={style} width="14" height="14" viewBox="0 0 24 24">
    <Path
      stroke={theme.colors.resume.dark3}
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    ></Path>
    <Polyline
      stroke={theme.colors.resume.dark3}
      points="22,6 12,13 2,6"
    ></Polyline>
  </Svg>
)

export default MailIcon
