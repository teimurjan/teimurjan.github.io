import { HTMLAttributes } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

export type Props = HTMLAttributes<HTMLDivElement>

const Logo = ({ className }: Props) => (
  <div className={classNames(className, 'max-md:w-12 max-md:h-12 w-14 h-14')}>
    <Image
      src="/logo.webp"
      alt="logo"
      width={128}
      height={128}
      className="h-full w-auto"
    />
  </div>
)

export default Logo
