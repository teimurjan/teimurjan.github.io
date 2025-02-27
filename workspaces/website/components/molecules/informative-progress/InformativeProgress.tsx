import Image from 'next/image'
import { Progress, ProgressProps, Typography } from '../../atoms'
import classNames from 'classnames'

export interface Props extends ProgressProps {
  label: string
  labelLogoSrc?: string
  progressLabel?: string
  className?: string
}

const InformativeProgress = ({
  className,
  label,
  labelLogoSrc,
  progressLabel,
  ...progressProps
}: Props) => (
  <div className={classNames('flex flex-col', className)}>
    <div className="flex items-center mb-1">
      {labelLogoSrc && (
        <Image
          className="mr-2"
          src={labelLogoSrc}
          alt={label}
          width={32}
          height={32}
        />
      )}
      <Typography.Title variant="h5">{label}</Typography.Title>
    </div>
    <div className="flex items-center">
      <div className="flex-1 pr-2">
        <Progress {...progressProps} />
      </div>
      {progressLabel && <Typography.Text>{progressLabel}</Typography.Text>}
    </div>
  </div>
)

export default InformativeProgress
