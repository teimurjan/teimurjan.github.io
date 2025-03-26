import gqlClient from '@/gql-client'
import { Background, Button, Container, Link, Typography } from '../../atoms'

const Footer = async () => {
  const data = await gqlClient.Resume()
  const {
    bios: [{ email, fullName }],
  } = data

  return (
    <Background color="dark2" className="py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
          <div>
            <Typography.Title color="light" className="mb-2" variant="h3">
              Do you want to connect?
            </Typography.Title>
            <Typography.Text color="light">
              Despite the fact that I might be busy, I'm open to any
              offers/collaborations and would be happy to reply.
            </Typography.Text>
          </div>
          <div>
            <Button.Link href={`mailto:${email}`} color="light">
              Send me an email
            </Button.Link>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <Typography.Text color="light">
            {new Date().getFullYear()} {fullName}
          </Typography.Text>
          <div className="flex gap-4">
            <Link
              color="light"
              href="https://github.com/teimurjan"
              underline="always"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              color="light"
              href="https://www.linkedin.com/in/teimur-gasanov"
              underline="always"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              color="light"
              href="https://www.toptal.com/resume/teimur-gasanov"
              underline="always"
              target="_blank"
              rel="noopener noreferrer"
            >
              Toptal
            </Link>
          </div>
        </div>
      </Container>
    </Background>
  )
}

export default Footer
