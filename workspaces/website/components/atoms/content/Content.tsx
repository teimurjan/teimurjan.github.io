import { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Content = ({ children, className }: Props) => (
  <div className={classNames(`pt-24`, className)}>{children}</div>
)

export default Content
