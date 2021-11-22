import Flex from '@react-css/flex'
import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'
import { Typography } from '../../atoms'

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
          flex-direction: column;
        }
      `}
      className={className}
      alignItemsCenter
    >
      <Flex.Item
        css={css`
          flex: 0.7;
          padding-bottom: ${theme.spacing.medium};
          padding-right: ${theme.spacing.medium};

          @media ${theme.screens.medium.mediaUpTo} {
            flex: 0.6;
            padding-bottom: 0;
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
          align-self: flex-end;
          flex: 0.3;

          @media ${theme.screens.small.mediaUpTo} {
            width: 100%;
          }

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
