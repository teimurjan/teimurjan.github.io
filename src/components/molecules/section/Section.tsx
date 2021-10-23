import { ReactNode } from 'react'
import { theme } from '../../../utils'
import { Background, BackgroundProps, Container, Spacer } from '../../atoms'

export interface Props {
  children: ReactNode
  color: BackgroundProps['color']
  spacings?: [
    keyof typeof theme.spacing | undefined,
    keyof typeof theme.spacing | undefined
  ]
}

const Section = ({
  children,
  color,
  spacings = ['medium', 'medium'],
}: Props) => {
  return (
    <Background color={color}>
      {spacings[0] && <Spacer size={spacings[0]} />}
      <Container>{children}</Container>
      {spacings[1] && <Spacer size={spacings[1]} />}
    </Background>
  )
}

export default Section
