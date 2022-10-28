import { css } from '@emotion/react'
import Flex from '@react-css/flex'
import { forwardRef, ReactNode } from 'react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'
import { Typography } from '../../atoms'
import { useMedia } from '../../../hooks'

export interface Props extends EmotionProps {
  imageSrc?: string
  imageAlt?: string
  title: string
  subtitle: ReactNode
}

const MediaCard = forwardRef<HTMLDivElement, Props>(
  ({ className, children, title, imageSrc, imageAlt, subtitle }, ref) => {
    const flexDirection = useMedia(
      [theme.screens.medium.mediaFrom],
      ['row' as const],
      'column' as const
    )
    return (
      <div
        ref={ref}
        css={css`
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          background: ${theme.colors.background.beige};
        `}
        className={className}
      >
        <Flex flexDirection={flexDirection}>
          {imageSrc && (
            <Flex.Item
              css={css`
                max-width: 100%;

                @media (${theme.screens.medium.mediaFrom}) {
                  flex-shrink: 0;
                  flex-basis: 500px;
                }
              `}
            >
              <img
                css={css`
                  width: 100%;
                  display: block;
                `}
                src={imageSrc}
                alt={imageAlt}
              />
            </Flex.Item>
          )}
          <Flex flexDirection="column">
            <Typography.Title
              css={css`
                padding: ${theme.spacing.small} ${theme.spacing.medium};
              `}
              variant="h5"
            >
              {title}
            </Typography.Title>
            <Typography.Text
              css={css`
                margin-bottom: ${theme.spacing.small};
                padding: 0 ${theme.spacing.medium};
              `}
            >
              {subtitle}
            </Typography.Text>
          </Flex>
        </Flex>
        <Typography.Text container>{children}</Typography.Text>
      </div>
    )
  }
)

export default MediaCard
