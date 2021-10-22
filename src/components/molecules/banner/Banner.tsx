import Flex from '@react-css/flex'
import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { Typography } from '../../atoms'
import { EmotionProps, theme } from '../../../utils'

interface Props extends EmotionProps {
  title: string
  subtitle: string
  description: string
  image: ReactNode
}

const Banner = ({ title, subtitle, description, image, className }: Props) => {
  return (
    <Flex
      css={css`
        @media ${theme.screens.small.mediaUpTo} {
          flex-direction: column-reverse;
        }
      `}
      className={className}
      alignItemsCenter
    >
      <Flex.Item
        flex={0.7}
        css={css`
          @media ${theme.screens.small.mediaFrom} {
            padding-right: ${theme.spacing.medium};
          }
        `}
      >
        <Typography.Title
          css={css`
            margin-bottom: ${theme.spacing.small};
          `}
          variant="h1"
          color="beige"
          transform="uppercase"
        >
          {title}
        </Typography.Title>
        <Typography.Title
          css={css`
            margin-bottom: ${theme.spacing.small};
          `}
          variant="h3"
          color="beige"
        >
          {subtitle}
        </Typography.Title>
        <Typography.Text
          css={css`
            max-width: 700px;
          `}
        >
          {description}
        </Typography.Text>
      </Flex.Item>
      <Flex.Item
        css={css`
          z-index: 1;
          position: relative;

          @media ${theme.screens.small.mediaUpTo} {
            margin-bottom: ${theme.spacing.medium};
            width: 100%;
          }
        `}
        flex={0.3}
      >
        {image}
      </Flex.Item>
    </Flex>
  )
}

export default Banner
