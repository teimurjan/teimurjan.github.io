import { css } from '@emotion/react'
import Flex from '@react-css/flex'
import React, { ReactNode } from 'react'
import { theme } from '@teimurjan/utils'
import { Background, BackgroundProps, Container, Spacer } from '../../atoms'

export interface Props {
  children: ReactNode
  color: BackgroundProps['color']
}

const GridSection = ({ children, color }: Props) => {
  return (
    <Background color={color}>
      <Spacer size="medium" />
      <Container>
        <Flex
          css={css`
            @media ${theme.screens.small.mediaUpTo} {
              flex-direction: column;
            }
          `}
        >
          {React.Children.map(children, (child, index) => (
            <Flex.Item
              css={
                index > 0 &&
                css`
                  padding-left: ${theme.spacing.large};
                `
              }
              key={child?.toString()}
              flex={1}
            >
              {child}
            </Flex.Item>
          ))}
        </Flex>
      </Container>
      <Spacer size="medium" />
    </Background>
  )
}

export default GridSection
