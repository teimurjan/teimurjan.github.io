'use client'
import { PropsWithChildren } from 'react'
import { Tooltip as ReactTooltip, PlacesType } from 'react-tooltip'

export interface Props {
  id: string
  content: string
  placement?: PlacesType
}

const Tooltip = ({
  id,
  content,
  children,
  placement,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <ReactTooltip id={id} className="!text-base" />
      <span
        className="cursor-default"
        data-tooltip-id={id}
        data-tooltip-content={content}
        data-tooltip-place={placement}
      >
        {children}
      </span>
    </>
  )
}

export default Tooltip
