import { forwardRef, PropsWithChildren, ReactNode } from 'react'
import { Typography } from '../../atoms'
import classNames from 'classnames'

export type Props = PropsWithChildren<{
  media?: ReactNode
  title: string
  subtitle?: ReactNode
  className?: string
}>

const MediaCard = forwardRef<HTMLDivElement, Props>(
  ({ className, children, title, media, subtitle }, ref) => {
    return (
      <div ref={ref} className={classNames('bg-light2 shadow-lg', className)}>
        <div className="flex flex-col lg:flex-row">
          {media && (
            <div className="w-full lg:flex-shrink-0 lg:w-[500px]">{media}</div>
          )}
          <div className="flex flex-col flex-1">
            <Typography.Title className="p-2 lg:p-4" variant="h5">
              {title}
            </Typography.Title>
            {subtitle && (
              <Typography.Text className="mb-2 px-4" container>
                {subtitle}
              </Typography.Text>
            )}
          </div>
        </div>
        <Typography.Text container>{children}</Typography.Text>
      </div>
    )
  },
)

export default MediaCard
