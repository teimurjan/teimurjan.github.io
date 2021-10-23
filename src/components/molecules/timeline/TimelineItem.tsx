import { css } from '@emotion/react'
import Flex from '@react-css/flex'
import { ReactNode } from 'react'
import { theme } from '../../../utils'
import { Typography } from '../../atoms'

export interface Props {
  icon: ReactNode
  date: string
  children: ReactNode
}

const TimelineItem = ({ icon, date, children }: Props) => (
  <Flex>
    <Typography.Title
      variant="h5"
      css={css`
        background: ${theme.colors.background.beige};
        margin-bottom: auto;
      `}
    >
      {icon}
    </Typography.Title>
    <Flex
      css={css`
        @media ${theme.screens.small.mediaUpTo} {
          padding-left: ${theme.spacing.small};
          flex-direction: column;
        }
      `}
    >
      <Typography.Title
        css={css`
          padding: 0 ${theme.spacing.medium};

          @media ${theme.screens.small.mediaUpTo} {
            padding: 0 0 ${theme.spacing.xsmall} 0;
          }
        `}
        variant="h5"
      >
        {date}
      </Typography.Title>
      <Flex.Item>{children}</Flex.Item>
    </Flex>
  </Flex>
)

export default TimelineItem
