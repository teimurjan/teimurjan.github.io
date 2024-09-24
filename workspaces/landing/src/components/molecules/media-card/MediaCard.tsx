import { css } from '@emotion/react'
import Flex from '@react-css/flex'
import { forwardRef, PropsWithChildren, ReactNode } from 'react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'
import { Typography } from '../../atoms'
import { useMedia } from '../../../hooks'

export type Props = PropsWithChildren<
  EmotionProps & {
    media?: ReactNode
    title: string
    subtitle?: ReactNode
  }
>

const MediaCard = forwardRef<HTMLDivElement, Props>(
  ({ className, children, title, media, subtitle }, ref) => {
    const flexDirection = useMedia(
      [theme.screens.large.mediaFrom],
      ['row' as const],
      'column' as const,
    )
    return (
      <div
        ref={ref}
        css={css`
          box-shadow: ${theme.colors.background.outline} 0px 5px 15px;
          background: ${theme.colors.background.light};
        `}
        className={className}
      >
        <Flex flexDirection={flexDirection}>
          {media && (
            <Flex.Item
              css={css`
                max-width: 100%;

                @media (${theme.screens.large.mediaFrom}) {
                  flex-shrink: 0;
                  flex-basis: 500px;
                }
              `}
            >
              {media}
            </Flex.Item>
          )}
          <Flex
            css={css`
              flex: 1;
            `}
            flexDirection="column"
          >
            <Typography.Title
              css={css`
                padding: ${theme.spacing.small} ${theme.spacing.medium};
              `}
              variant="h5"
            >
              {title}
            </Typography.Title>
            {subtitle && (
              <Typography.Text
                css={css`
                  margin-bottom: ${theme.spacing.small};
                  padding: 0 ${theme.spacing.medium};
                `}
                container
              >
                {subtitle}
              </Typography.Text>
            )}
          </Flex>
        </Flex>
        <Typography.Text container>{children}</Typography.Text>
      </div>
    )
  },
)

export default MediaCard
