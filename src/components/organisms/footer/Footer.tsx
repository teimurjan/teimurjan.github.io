import Flex from '@react-css/flex'
import { css } from '@emotion/react'
import { Background, Button, Container, Link, Typography } from '../../atoms'
import { theme } from '../../../utils'

const Footer = () => {
  return (
    <Background
      color="blue"
      css={css`
        padding: ${theme.spacing.large} 0;
      `}
    >
      <Container>
        <Flex
          css={css`
            margin-bottom: ${theme.spacing.medium};

            @media ${theme.screens.small.mediaUpTo} {
              flex-direction: column;
            }
          `}
          gap={theme.spacing.medium}
          justifySpaceBetween
        >
          <Flex.Item>
            <Typography.Title
              color="beige"
              css={css`
                margin-bottom: ${theme.spacing.small};
              `}
              variant="h3"
            >
              Do you want to connect?
            </Typography.Title>
            <Typography.Text color="beige">
              Despite the fact that I might be busy, I'm open to any
              offers/collaboartions and would be happy to reply.
            </Typography.Text>
          </Flex.Item>
          <Flex.Item>
            <Button.Link to="mailto:teymurgg321@gmail.com" inverted>
              Send me an email
            </Button.Link>
          </Flex.Item>
        </Flex>
        <Flex gap={theme.spacing.medium} justifySpaceBetween>
          <Typography.Text color="beige">
            {new Date().getFullYear()} Teimur Gasanov
          </Typography.Text>
          <Flex.Item>
            <Flex gap={theme.spacing.medium}>
              <Link
                color="beige"
                to="https://github.com/teimurjan"
                underline="always"
              >
                GitHub
              </Link>
              <Link
                color="beige"
                to="https://www.linkedin.com/in/teimur-gasanov"
                underline="always"
              >
                LinkedIn
              </Link>
            </Flex>
          </Flex.Item>
        </Flex>
      </Container>
    </Background>
  )
}

export default Footer
