import { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  id?: string
  children: ReactNode
}

const Container = ({ children, className, id }: Props) => (
  <div id={id} className={classNames('container mx-auto px-4 lg:px-12', className)}>
    {children}
  </div>
)

export default Container
