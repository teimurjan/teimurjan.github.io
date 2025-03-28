import { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import Typography from '../../atoms/typography'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle: string
  description: string
  button?: ReactNode
  image: ReactNode
}

const Banner = ({
  title,
  subtitle,
  description,
  image,
  button,
  className,
}: Props) => {
  return (
    <div className={classNames('flex flex-row max-md:flex-col items-center pt-8 max-md:pb-8', className)}>
      <div className="basis-3/5 flex-grow-0 flex-shrink-0 max-md:basis-1 max-lg:basis-2/5 z-20">
        <Typography.Title className="mb-2 uppercase" color="light" variant="h1">
          {title}
        </Typography.Title>
        <Typography.Title className="mb-2" color="light" variant="h3">
          {subtitle}
        </Typography.Title>
        <Typography.Text className="mb-4 max-w-[700px]">
          {description}
        </Typography.Text>
        {button}
      </div>
      <div className="relative z-10 basis-2/5 flex-grow-0 flex-shrink-0 max-md:basis-1 max-lg:basis-3/5 max-md:mb-4">{image}</div>
    </div>
  )
}

export default Banner
