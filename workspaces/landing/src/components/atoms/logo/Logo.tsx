import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'

export type Props = EmotionProps

const Logo = ({ className }: Props) => (
  <div
    className={className}
    css={css`
      width: ${theme.layout.logoSize.large};
      height: ${theme.layout.logoSize.large};

      @media ${theme.screens.small.mediaUpTo} {
        width: ${theme.layout.logoSize.small};
        height: ${theme.layout.logoSize.small};
      }
    `}
  >
    <StaticImage
      src="../../../assets/images/logo.png"
      alt="logo"
      placeholder="blurred"
      layout="fullWidth"
    />
  </div>
)

export default Logo
