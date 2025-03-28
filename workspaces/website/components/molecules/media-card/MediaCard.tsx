import { forwardRef, PropsWithChildren, ReactNode } from 'react'
import Typography from '../../atoms/typography'
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
        <div className="flex flex-col xl:flex-row">
          {media && (
            <div className="w-full xl:flex-shrink-0 xl:basis-[500px]">{media}</div>
          )}
          <div className="flex flex-col flex-1 py-4 xl:py-2 px-4">
            <Typography.Title variant="h5">
              {title}
            </Typography.Title>
            {subtitle && (
              <Typography.Text className="mt-2" container>
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
