import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import { theme } from '../../../utils'

export interface Props {}

const Logo = () => (
  <div
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
      src="../../../assets/icon.png"
      alt="logo"
      placeholder="blurred"
      layout="fullWidth"
    />
  </div>
)

export default Logo
