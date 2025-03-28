'use client'
import { HTMLAttributes, useMemo, useState } from 'react'
import {
  useFloating,
  shift,
  offset,
  useInteractions,
  useClick,
  useDismiss,
} from '@floating-ui/react'
import Button from '../../atoms/button'
import Typography from '../../atoms/typography'

type Option = {
  value: string
  label: string
  key: string
}

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: Option[]
  value?: string
  placeholder: string
  onChange: (value: string) => void
}

const ButtonSelect = ({
  className,
  options,
  value,
  placeholder,
  onChange,
}: Props) => {
  const [isOpen, setOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-end',
    middleware: [offset(10), shift()],
    open: isOpen,
    onOpenChange: setOpen,
  })
  const click = useClick(context)
  const dismiss = useDismiss(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ])

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  )

  return (
    <div className="relative">
      <Button
        className={className}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </Button>

      <div
        className="dropdown-menu shadow-lg bg-light2 origin-top transition-all"
        ref={refs.setFloating}
        style={{
          ...floatingStyles,
          transform: `${floatingStyles.transform} scaleY(${isOpen ? 1 : 0})`,
          opacity: isOpen ? 1 : 0,
        }}
        {...getFloatingProps()}
      >
        {options.map((option) => (
          <div
            key={option.key}
            className="px-3 py-2 hover:bg-light cursor-pointer uppercase text-sm"
            onClick={() => {
              onChange(option.value)
              setOpen(false)
            }}
          >
            <Typography.Text variant="sm" color="dark">
              {option.label}
            </Typography.Text>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ButtonSelect
