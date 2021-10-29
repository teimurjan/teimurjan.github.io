import { css } from '@emotion/react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'

export interface Props extends EmotionProps {
  html: string
}

const RichText = ({ html }: Props) => (
  <div
    css={css`
      ul {
        padding-left: ${theme.spacing.small};
      }
    `}
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

export default RichText
