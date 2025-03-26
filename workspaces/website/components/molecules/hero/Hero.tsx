import { HTMLAttributes } from 'react'
import { Container, Typography } from '../../atoms'
import Image, { ImageProps } from 'next/image'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string
  image?: ImageProps['src']
}

const Hero = ({ title, image }: Props) => {
  return (
    <Container className="text-center">
      {image && (
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="mb-4 w-80 max-w-full mx-auto"
        />
      )}
      <Typography.Title variant="h2" transform="uppercase" color="light">
        {title}
      </Typography.Title>
    </Container>
  )
}

export default Hero
