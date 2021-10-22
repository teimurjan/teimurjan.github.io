import { css } from '@emotion/react'
import Flex from '@react-css/flex'
import { theme } from '../../../utils'
import { Progress, ProgressProps, Typography } from '../../atoms'

export interface Props extends ProgressProps {
  label: string
  labelLogoSrc?: string
  progressLabel?: string
}

const InformativeProgress = ({
  className,
  label,
  labelLogoSrc,
  progressLabel,
  ...progressProps
}: Props) => (
  <Flex className={className} flexDirection="column">
    <Flex
      css={css`
        margin-bottom: ${theme.spacing.xsmall};
      `}
      alignItemsCenter
    >
      <img
        css={css`
          max-height: 2rem;
          margin-right: ${theme.spacing.small};
        `}
        src={labelLogoSrc}
        alt={label}
      />
      <Typography.Title variant="h5">{label}</Typography.Title>
    </Flex>
    <Flex alignItemsCenter>
      <Flex.Item
        css={css`
          padding-right: ${theme.spacing.small};
        `}
        flex={1}
      >
        <Progress {...progressProps} />
      </Flex.Item>
      {progressLabel && <Typography.Text>{progressLabel}</Typography.Text>}
    </Flex>
  </Flex>
)

export default InformativeProgress
