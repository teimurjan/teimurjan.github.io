import { css } from '@emotion/react'
import Flex from '@react-css/flex'
import { forwardRef, ReactNode } from 'react'
import { EmotionProps, theme } from '../../../utils'
import { Typography } from '../../atoms'

export interface Props extends EmotionProps {
  children: ReactNode
  id?: string
  imageSrc?: string
  imageAlt?: string
  title: string
  subtitle1: string
  subtitle2?: string
  color?: keyof typeof theme.colors.background
}

const Card = forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      children,
      id,
      title,
      imageSrc,
      imageAlt,
      subtitle1,
      subtitle2,
      color = 'beige',
    },
    ref
  ) => {
    const textColor = color === 'beige' ? 'blue' : 'beige'

    return (
      <div
        id={id}
        ref={ref}
        css={css`
          padding: ${theme.spacing.small} ${theme.spacing.medium};
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          background: ${theme.colors.background[color]};
          max-width: 500px;

          @media ${theme.screens.medium.mediaUpTo} {
            max-width: 100%;
          }
        `}
        className={className}
      >
        <Flex alignItemsCenter>
          {imageSrc && (
            <Flex.Item>
              <img
                css={css`
                  max-height: 3.25rem;
                  margin-right: ${theme.spacing.small};
                `}
                src={imageSrc}
                alt={imageAlt}
              />
            </Flex.Item>
          )}

          <Flex.Item>
            <Typography.Title color={textColor} variant="h4">
              {title}
            </Typography.Title>
            <Typography.Title
              color={textColor}
              css={css`
                margin-bottom: ${theme.spacing.xsmall};
              `}
              variant="h5"
            >
              {subtitle1}
            </Typography.Title>
            {subtitle2 && (
              <Typography.Text color={textColor}>{subtitle2}</Typography.Text>
            )}
          </Flex.Item>
        </Flex>
        <Typography.Text color={textColor} container>
          {children}
        </Typography.Text>
      </div>
    )
  }
)

export default Card
