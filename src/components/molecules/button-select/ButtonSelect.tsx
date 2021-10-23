import { css } from '@emotion/react'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { usePopper } from 'react-popper'
import { CSSTransition } from 'react-transition-group'
import { Button, Typography } from '../../atoms'
import { EmotionProps, theme } from '../../../utils'
import { useOnClickOutside } from '../../../hooks'

type Option = {
  value: string
  label: string
}

export interface Props extends EmotionProps {
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
        className={className}
        ref={setReferenceElement}
        onClick={handleClick}
      >
        {selectedOption ? selectedOption.label : placeholder} ⬇️
      </Button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        unmountOnExit
        classNames="appear"
      >
        <div
          className={popperClassName}
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div
            css={css`
              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              background: ${theme.colors.background.beige};
              text-transform: uppercase;
              transition: all 300ms
                ${theme.transition.timingFunction.easeInOutCubic};
              transform-origin: 50% 0;

              .appear-enter &,
              .appear-exit &,
              .appear-exit-active &,
              .appear-exited & {
                transform: scaleY(0);
                opacity: 0;
              }

              .appear-enter-active &,
              .appear-enter-done {
                transform: scaleY(1);
                opacity: 1;
              }
            `}
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
        </div>
      </CSSTransition>
    </Fragment>
  )
}

export default ButtonSelect
