import React, { ReactNode } from 'react'
import { css } from '@emotion/react'
import Flex from '@react-css/flex'
import { theme } from '@teimurjan/utils'
import TimelineItem from './TimelineItem'
import { EmotionProps } from '../../../utils'

export interface Props extends EmotionProps {
  children: ReactNode
  hideLine?: boolean
}

const Timeline = ({ className, children, hideLine = false }: Props) => (
  <Flex
    className={className}
    css={css`
      position: relative;
    `}
    flexDirection="column"
  >
    {React.Children.map(children, (child, index) => (
      <Flex.Item
        css={css`
          margin-bottom: ${index === React.Children.count(children) - 1
            ? 0
            : theme.spacing.xlarge};
          flex: 1;

          z-index: 1;
        `}
      >
        {child}
      </Flex.Item>
    ))}
    <div
      css={css`
        position: absolute;
        border-right: 4px solid ${theme.colors.geometry.blueAlpha};
        height: 100%;
        left: calc(
          calc(${theme.typography.title.xlarge.h5.fontSize} / 2) - 2px
        );
        top: 0;
        transition: transform 500ms
          ${theme.transition.timingFunction.easeInOutCubic};
        transform: scaleY(${hideLine ? 0 : 1});
        transition-delay: 300ms;
        transform-origin: 50% 0;
      `}
    />
  </Flex>
)

export default Object.assign(Timeline, { Item: TimelineItem })
