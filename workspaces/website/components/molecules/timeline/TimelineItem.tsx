import { HTMLAttributes, ReactNode } from 'react'
import Typography from '../../atoms/typography'
import classNames from 'classnames'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode
  date: string
}

const TimelineItem = ({ className, icon, date, children }: Props) => (
  <div className={classNames('flex', className)}>
    <Typography.Title className="mb-auto bg-light z-10 px-1 py-2" variant="h4">
      {icon}
    </Typography.Title>
    <div className="flex flex-1 flex-row max-md:flex-col max-md:pl-8">
      <Typography.Title
        className="px-12 py-3 max-md:px-0 flex-shrink-0"
        variant="h5"
      >
        {date}
      </Typography.Title>
      <div className="flex-1">{children}</div>
    </div>
  </div>
)

export default TimelineItem
