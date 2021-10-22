import { css } from '@emotion/react'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { usePopper } from 'react-popper'
import { Button, Typography } from '../../atoms'
import { EmotionProps, theme } from '../../../utils'
import { useOnClickOutside } from '../../../hooks'

type Option = {
  value: string
  label: string
}

interface Props extends EmotionProps {
  options: Option[]
  value?: string
  placeholder: string
  onChange: (value: string) => void
  popperClassName?: string
}

const ButtonSelect = ({
  className,
  options,
  value,
  placeholder,
  onChange,
  popperClassName,
}: Props) => {
  const [isOpen, setOpen] = useState(false)
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  })

  const handleOutsideClick = useCallback(() => setOpen(false), [])
  useOnClickOutside(popperElement, handleOutsideClick)

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  )

  const handleClick = useCallback(() => setOpen(!isOpen), [isOpen])

  return (
    <Fragment>
      <Button
        style={{ width: styles.popper.width }}
        className={className}
        ref={setReferenceElement}
        onClick={handleClick}
      >
        {selectedOption ? selectedOption.label : placeholder} ⬇️
      </Button>
      {isOpen && (
        <div
          className={popperClassName}
          css={css`
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            background: ${theme.colors.background.beige};
            text-transform: uppercase;
          `}
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {options.map((option) => (
            <div
              css={css`
                padding: ${theme.spacing.xsmall} ${theme.spacing.small};
              `}
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
            >
              <Typography.Text variant="small" color="blue">
                {option.label}
              </Typography.Text>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  )
}

export default ButtonSelect
