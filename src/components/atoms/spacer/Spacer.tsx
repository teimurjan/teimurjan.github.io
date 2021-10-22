import { css } from '@emotion/react'
import { EmotionProps, theme } from '../../../utils'

interface Props extends EmotionProps {
  size: keyof typeof theme.spacing
  variant?: 'horizontal' | 'vertical'
}

const Spacer = ({ className, size, variant = 'vertical' }: Props) => (
  <div
    css={
      variant === 'vertical'
        ? css`
            padding-bottom: ${theme.spacing[size]};
          `
        : css`
            padding-right: ${theme.spacing[size]};
          `
    }
    className={className}
  />
)

export default Spacer
