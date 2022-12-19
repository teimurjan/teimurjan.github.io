import { css } from '@emotion/react'
import { theme } from '@teimurjan/utils'
import { Container, Typography } from '../../atoms'

export interface Props {
  title: string
}

const Hero = ({ title }: Props) => {
  return (
    <Container
      css={css`
        text-align: center;
        margin-top: ${theme.spacing.xlarge};
      `}
    >
      <Typography.Title variant="h1" transform="uppercase" color="light">
        {title}
      </Typography.Title>
    </Container>
  )
}

export default Hero
