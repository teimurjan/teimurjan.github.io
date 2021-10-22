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
      <Typography.Title
        css={css`
          padding: 0 ${theme.spacing.medium};
        `}
        variant="h5"
      >
        {date}
      </Typography.Title>
    </Flex>
    <Flex.Item>{children}</Flex.Item>
  </Flex>
)

export default TimelineItem
