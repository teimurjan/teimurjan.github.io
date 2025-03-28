import { Children } from 'react'
import Background, {
  Props as BackgroundProps,
} from '../../atoms/background'
import Container from '../../atoms/container'

export type Props = BackgroundProps

const GridSection = ({ children, ...rest }: Props) => {
  return (
    <Background {...rest}>
      <Container>
        <div className="flex flex-col md:flex-row gap-12">
          {Children.map(children, (child, index) => (
            <div key={index} className="flex-1">
              {child}
            </div>
          ))}
        </div>
      </Container>
    </Background>
  )
}

export default GridSection
