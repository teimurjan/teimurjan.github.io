import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { Background, Typography } from '../../atoms'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  id?: string
  image?: {
    src: string
    alt: string
  }
  title: string
  subtitle1: ReactNode
  subtitle2?: string
  overlay?: ReactNode
}

const Card = forwardRef<HTMLDivElement, Props>(
  (
    { className, children, id, title, image, subtitle1, subtitle2, overlay },
    ref,
  ) => {
    return (
      <div
        id={id}
        ref={ref}
        className={classNames(
          'relative px-8 py-4 shadow-lg bg-light2',
          className,
        )}
      >
        {overlay && (
          <Background className="absolute top-2 right-0" color="dark">
            {overlay}
          </Background>
        )}

        <div className="flex items-center gap-6">
          {image && (
            <div className="h-[3.25rem]">
              <Image
                className="w-full"
                src={image.src}
                alt={image.alt}
                width={0}
                height={0}
              />
            </div>
          )}

          <div className={classNames(overlay && 'pr-4')}>
            <Typography.Title variant="h4">{title}</Typography.Title>
            <Typography.Title className="mb-1" variant="h5">
              {subtitle1}
            </Typography.Title>
            {subtitle2 && <Typography.Text>{subtitle2}</Typography.Text>}
          </div>
        </div>
        <Typography.Text className="mt-4" container>
          {children}
        </Typography.Text>
      </div>
    )
  },
)

export default Card
