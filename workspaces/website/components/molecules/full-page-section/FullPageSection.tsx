import Background, {
  Props as BackgroundProps,
} from '../../atoms/background'
import Container from '../../atoms/container'

export type Props = BackgroundProps

const FullPageSection = ({ children, color }: Props) => {
  return (
    <Background color={color}>
      <Container>
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-6rem)]">
          {children}
        </div>
      </Container>
    </Background>
  )
}

export default FullPageSection
