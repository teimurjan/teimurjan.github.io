import { css } from '@emotion/react'
import Flex from '@react-css/flex'
import React, { ReactNode } from 'react'
import { theme } from '../../../utils'
import { Background, BackgroundProps, Container, Spacer } from '../../atoms'

interface Props {
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
          gap={theme.spacing.large}
        >
          {React.Children.map(children, (child) => (
            <Flex.Item key={child?.toString()} flex={1}>
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
