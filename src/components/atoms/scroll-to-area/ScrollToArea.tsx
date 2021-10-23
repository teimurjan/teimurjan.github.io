import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { EmotionProps } from '../../../utils'

export interface Props extends EmotionProps {
  children: ReactNode
  id: string
  scrollOffset?: number
}

const ScrollToArea = ({ id, className, children, scrollOffset = 0 }: Props) => (
  <div
    className={className}
    css={css`
      position: relative;
    `}
  >
    <div
      id={id}
      css={css`
        opacity: 0;
        position: absolute;
        left: 0;
        top: ${scrollOffset}px;
        width: 100%;
        height: 100%;
        z-index: -10;
        pointer-events: none;
      `}
    />
    {children}
  </div>
)

export default ScrollToArea
