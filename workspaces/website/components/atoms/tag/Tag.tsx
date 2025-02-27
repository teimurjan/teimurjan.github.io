import classNames from 'classnames'
import Background, { Props as BackgroundProps } from '../background'

export type Props = BackgroundProps

const Tag = ({ className, children, color }: BackgroundProps) => {
  return (
    <Background
      className={classNames(
        className,
        'uppercase font-bold text-sm py-1 px-2',
        color === 'dark' || color === 'dark2' ? 'text-light' : 'text-dark',
      )}
      color={color}
    >
      {children}
    </Background>
  )
}

export default Tag
