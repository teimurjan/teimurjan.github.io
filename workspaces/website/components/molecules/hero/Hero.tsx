import { HTMLAttributes } from 'react'
import { Container, Typography } from '../../atoms'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string
}

const Hero = ({ title }: Props) => {
  return (
    <Container className="text-center mt-16">
      <Typography.Title variant="h1" transform="uppercase" color="light">
        {title}
      </Typography.Title>
    </Container>
  )
}

export default Hero
