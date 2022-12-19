import { css } from '@emotion/react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'

export interface Props extends EmotionProps {
  percentage: number
  fullWidth?: boolean
}

const Progress = ({ className, percentage, fullWidth }: Props) => (
  <div
    className={className}
    css={css`
      height: 0.75rem;
      width: ${fullWidth ? '100%' : '24rem'};
      background: ${theme.colors.geometry.light};
      position: relative;
      border-radius: ${theme.border.radius.small};
    `}
  >
    <div
      css={css`
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        transform: scaleX(${percentage / 100});
        transform-origin: 0 100%;
        transition: transform 500ms
          ${theme.transition.timingFunction.easeInOutCubic};
        transition-delay: 300ms;
        background: ${theme.colors.geometry.dark};
        border-radius: ${theme.border.radius.small};
      `}
    />
  </div>
)

export default Progress
