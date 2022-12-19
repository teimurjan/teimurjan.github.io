import { css } from '@emotion/react'
import Flex from '@react-css/flex'
import { ReactNode } from 'react'
import { theme } from '@teimurjan/utils'
import { Typography } from '../../atoms'
import { EmotionProps } from '../../../utils'

export interface Props extends EmotionProps {
  icon: ReactNode
  date: string
  children: ReactNode
}

const TimelineItem = ({ className, icon, date, children }: Props) => (
  <Flex className={className}>
    <Typography.Title
      variant="h5"
      css={css`
        background: ${theme.colors.background.light};
        margin-bottom: auto;
      `}
    >
      {icon}
    </Typography.Title>
    <Flex
      css={css`
        flex: 1;
        @media ${theme.screens.small.mediaUpTo} {
          padding-left: ${theme.spacing.small};
          flex-direction: column;
        }
      `}
    >
      <Typography.Title
        css={css`
          padding: 0 ${theme.spacing.medium};
          flex-shrink: 0;

          @media ${theme.screens.small.mediaUpTo} {
            padding: 0 0 ${theme.spacing.xsmall} 0;
          }
        `}
        variant="h5"
      >
        {date}
      </Typography.Title>
      <Flex.Item flex={1}>{children}</Flex.Item>
    </Flex>
  </Flex>
)

export default TimelineItem
