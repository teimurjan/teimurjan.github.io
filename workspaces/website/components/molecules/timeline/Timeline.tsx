import React, { HTMLAttributes } from 'react'
import TimelineItem from './TimelineItem'
import classNames from 'classnames'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  hideLine?: boolean
}

const Timeline = ({ className, children, hideLine = false }: Props) => (
  <div className={classNames('relative flex flex-col gap-12', className)}>
    {React.Children.map(children, (child) => (
      <div className="flex-1">{child}</div>
    ))}
    {!hideLine && (
      <div className="absolute left-3 top-0 h-full border-r-4 border-geometry-light transform origin-top scale-y-100 transition-transform duration-500 delay-300" />
    )}
  </div>
)

export default Object.assign(Timeline, { Item: TimelineItem })
