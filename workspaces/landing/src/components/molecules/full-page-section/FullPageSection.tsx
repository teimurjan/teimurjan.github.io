import { css } from '@emotion/react'
import Flex from '@react-css/flex'
import { ReactNode } from 'react'
import { theme } from '@teimurjan/utils'
import { Background, BackgroundProps, Container } from '../../atoms'

export interface Props {
  children: ReactNode
  color: BackgroundProps['color']
}

const FullPageSection = ({ children, color }: Props) => {
  return (
    <Background color={color}>
      <Container>
        <Flex
          css={css`
            height: calc(100vh - ${theme.layout.contentTop.large});
            width: 100%;

            @media ${theme.screens.small.mediaUpTo} {
              height: calc(100vh - ${theme.layout.contentTop.small});
            }
          `}
          flexDirection="column"
          alignItemsCenter
          justifyCenter
        >
          {children}
        </Flex>
      </Container>
    </Background>
  )
}

export default FullPageSection
