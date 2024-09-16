import Flex from '@react-css/flex'
import { css } from '@emotion/react'
import { theme } from '@teimurjan/utils'
import { Background, Button, Container, Link, Typography } from '../../atoms'

const Footer = () => {
  return (
    <Background
      color="dark2"
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
              color="light"
              css={css`
                margin-bottom: ${theme.spacing.small};
              `}
              variant="h3"
            >
              Do you want to connect?
            </Typography.Title>
            <Typography.Text color="light">
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
          <Typography.Text color="light">
            {new Date().getFullYear()} Teimur Gasanov
          </Typography.Text>
          <Flex.Item>
            <Flex gap={theme.spacing.medium}>
              <Link
                color="light"
                to="https://github.com/teimurjan"
                underline="always"
              >
                GitHub
              </Link>
              <Link
                color="light"
                to="https://www.linkedin.com/in/teimur-gasanov"
                underline="always"
              >
                LinkedIn
              </Link>
              <Link
                color="light"
                to="https://www.toptal.com/resume/teimur-gasanov"
                underline="always"
              >
                Toptal
              </Link>
            </Flex>
          </Flex.Item>
        </Flex>
      </Container>
    </Background>
  )
}

export default Footer
