import { HTMLAttributes } from 'react'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  html: string
}

const RichText = ({ html, className }: Props) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
)

export default RichText
