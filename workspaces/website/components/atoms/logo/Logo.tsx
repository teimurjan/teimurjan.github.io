import { HTMLAttributes } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import logo from '../../../assets/images/logo.png'

export type Props = HTMLAttributes<HTMLDivElement>

const Logo = ({ className }: Props) => (
  <div className={classNames(className, 'max-md:w-12 max-md:h-12 w-16 h-16')}>
    <Image src={logo} alt="logo" width={64} height={64} />
  </div>
)

export default Logo
