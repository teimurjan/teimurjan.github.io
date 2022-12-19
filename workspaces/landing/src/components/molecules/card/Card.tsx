import { css } from '@emotion/react'
import Flex from '@react-css/flex'
import { forwardRef, ReactNode } from 'react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'
import { Background, Typography } from '../../atoms'

export interface Props extends EmotionProps {
  children: ReactNode
  id?: string
  imageSrc?: string
  imageAlt?: string
  title: string
  subtitle1: ReactNode
  subtitle2?: string
  overlay?: ReactNode
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
      overlay,
    },
    ref
  ) => {
    return (
      <div
        id={id}
        ref={ref}
        css={css`
          padding: ${theme.spacing.small} ${theme.spacing.medium};
          box-shadow: ${theme.colors.background.outline} 0px 5px 15px;
          background: ${theme.colors.background.light};
          position: relative;
        `}
        className={className}
      >
        {overlay && (
          <Background
            css={css`
              position: absolute;
              right: 0;
              top: ${theme.spacing.small};
            `}
            color="dark"
          >
            {overlay}
          </Background>
        )}

        <Flex alignItemsCenter>
          {imageSrc && (
            <Flex.Item>
              <img
                css={css`
                  max-height: 3.25rem;
                  margin-right: ${theme.spacing.medium};
                `}
                src={imageSrc}
                alt={imageAlt}
              />
            </Flex.Item>
          )}

          <Flex.Item
            css={
              overlay &&
              css`
                padding-right: ${theme.spacing.medium};
              `
            }
          >
            <Typography.Title variant="h4">{title}</Typography.Title>
            <Typography.Title
              css={css`
                margin-bottom: ${theme.spacing.xsmall};
              `}
              variant="h5"
            >
              {subtitle1}
            </Typography.Title>
            {subtitle2 && <Typography.Text>{subtitle2}</Typography.Text>}
          </Flex.Item>
        </Flex>
        <Typography.Text container>{children}</Typography.Text>
      </div>
    )
  }
)

export default Card
