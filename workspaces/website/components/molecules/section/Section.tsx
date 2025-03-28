import Background, { Props as BackgroundProps } from '../../atoms/background'
import Container from '../../atoms/container'
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
