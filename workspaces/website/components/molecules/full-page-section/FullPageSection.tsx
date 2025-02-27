import { Background, BackgroundProps, Container } from '../../atoms'

export type Props = BackgroundProps

const FullPageSection = ({ children, color }: Props) => {
  return (
    <Background color={color}>
      <Container>
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-4rem)] max-md:h-[calc(100vh-3rem)]">
          {children}
        </div>
      </Container>
    </Background>
  )
}

export default FullPageSection
