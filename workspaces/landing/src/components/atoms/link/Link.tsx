import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'
import { MouseEventHandler, useCallback, useMemo, useRef } from 'react'
import { css } from '@emotion/react'
import { EmotionProps, navigateToAnchor } from '../../../utils'
import { theme } from '@teimurjan/utils'

export interface Props
  extends EmotionProps,
    GatsbyLinkProps<Record<string, never>> {
  inheritFontSize?: boolean
  color?: keyof typeof theme.colors.link
  underline?: 'none' | 'hover' | 'always'
  type?: 'anchor' | 'external' | 'internal'
}

const linkCss = ({
  inheritFontSize,
  color = 'blue',
  underline,
}: Pick<Props, 'inheritFontSize' | 'color' | 'underline'>) => css`
  font-size: ${inheritFontSize ? 'inherit' : theme.typography.text.p.fontSize};
  line-height: ${inheritFontSize
    ? 'inherit'
    : theme.typography.text.p.lineHeight};
  color: ${theme.colors.link[color]};
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  pointer-events: auto;

  &:after {
    content: '';
    box-sizing: border-box;
    display: ${underline === 'none' ? 'none' : 'block'};
    width: 100%;
    height: 1px;
    background: ${theme.colors.link[color]};
    transition: transform 300ms
      ${theme.transition.timingFunction.easeInOutCubic};
    transform: scaleX(${underline === 'always' ? 1 : 0});
    transform-origin: 0 50%;
    bottom: -0.25rem;
    left: 0;
    position: absolute;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`

const Link = ({
  to,
  children,
  className,
  onClick,
  inheritFontSize = false,
  color = 'blue',
  underline = 'hover',
  rel = 'noopener noreferrer',
  target = '_blank',
  type,
}: Props) => {
  const linkRef = useRef<HTMLAnchorElement>(null)

  const linkType = useMemo(() => {
    if (type) {
      return type
    }

    if (/^\/#(?!\/)/.test(to)) {
      return 'anchor'
    }

    if (/^\/(?!\/)/.test(to)) {
      return 'internal'
    }

    return 'external'
  }, [type, to])

  const link = useMemo(() => {
    if (linkType === 'anchor') {
      const anchor = to.split('#')[1]
      return (
        <a
          href={to}
          ref={linkRef}
          css={linkCss({ inheritFontSize, color, underline })}
          onClick={(e) => {
            e.preventDefault()
            navigateToAnchor(anchor)
            onClick?.(e)
          }}
        >
          {children}
        </a>
      )
    }

    if (linkType === 'internal') {
      return (
        <GatsbyLink
          innerRef={linkRef}
          css={linkCss({ inheritFontSize, color, underline })}
          to={to}
          onClick={onClick}
        >
          {children}
        </GatsbyLink>
      )
    }

    return (
      <a
        href={to}
        ref={linkRef}
        css={linkCss({ inheritFontSize, color, underline })}
        onClick={onClick}
        rel={rel}
        target={target}
      >
        {children}
      </a>
    )
  }, [
    to,
    linkType,
    children,
    inheritFontSize,
    color,
    onClick,
    rel,
    target,
    underline,
  ])

  const handleWrapperClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const target = e.target as HTMLDivElement
      const isLinkPropogatedEvent = target.nodeName.toLowerCase() === 'a'

      if (!isLinkPropogatedEvent) {
        e.preventDefault()
        linkRef.current?.click()
      }
    },
    [linkRef]
  )

  return (
    <div
      onClick={handleWrapperClick}
      css={css`
        display: inline-block;
        cursor: pointer;

        &:hover > a:after {
          transform: scaleX(1);
        }
      `}
      className={className}
    >
      {link}
    </div>
  )
}

export default Link
