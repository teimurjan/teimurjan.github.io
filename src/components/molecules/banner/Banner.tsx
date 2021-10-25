import Flex from '@react-css/flex'
import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { Typography } from '../../atoms'
import { EmotionProps, theme } from '../../../utils'

export interface Props extends EmotionProps {
  title: string
  subtitle: string
  description: string
  button?: ReactNode
  image: ReactNode
}

const Banner = ({
  title,
  subtitle,
  description,
  image,
  button,
  className,
}: Props) => {
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
        css={css`
          flex: 0.7;

          @media ${theme.screens.small.mediaFrom} {
            padding-right: ${theme.spacing.medium};
          }

          @media ${theme.screens.small.mediaUpTo} {
            padding-bottom: ${theme.spacing.medium};
          }

          @media ${theme.screens.medium.mediaUpTo} {
            flex: 0.6;
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
            margin-bottom: ${theme.spacing.small};
          `}
        >
          {description}
        </Typography.Text>
        {button}
      </Flex.Item>
      <Flex.Item
        css={css`
          z-index: 1;
          position: relative;

          @media ${theme.screens.small.mediaUpTo} {
            margin-bottom: ${theme.spacing.medium};
            width: 100%;
          }

          flex: 0.3;

          @media ${theme.screens.medium.mediaUpTo} {
            flex: 0.4;
          }
        `}
      >
        {image}
      </Flex.Item>
    </Flex>
  )
}

export default Banner
