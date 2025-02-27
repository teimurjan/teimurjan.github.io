import classNames from 'classnames'
import { HTMLAttributes } from 'react'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  percentage: number
  fullWidth?: boolean
}

const Progress = ({ className, percentage, fullWidth }: Props) => (
  <div
    className={classNames(
      className,
      fullWidth ? 'w-full' : 'w-96',
      'h-3 relative rounded bg-geometry-light',
    )}
  >
    <div
      className="absolute left-0 bottom-0 h-full w-full transform transition-transform duration-500 delay-300 rounded bg-geometry-dark"
      style={{
        transform: `scaleX(${percentage / 100})`,
        transformOrigin: '0 100%',
        transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
      }}
    />
  </div>
)

export default Progress
