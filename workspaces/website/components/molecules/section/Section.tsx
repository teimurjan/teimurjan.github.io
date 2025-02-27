import { Background, BackgroundProps, Container } from '../../atoms'
import classNames from 'classnames'

export interface Props extends BackgroundProps {
  className?: string
}

const Section = ({ children, className, ...rest }: Props) => {
  return (
    <Background className={classNames('overflow-hidden', className)} {...rest}>
      <Container>{children}</Container>
    </Background>
  )
}

export default Section
