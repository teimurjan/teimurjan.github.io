import { Background, Button, Container, Link, Typography } from '../../atoms'

const Footer = () => {
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
            <Button.Link href="mailto:teymurgg321@gmail.com" color="light">
              Send me an email
            </Button.Link>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <Typography.Text color="light">
            {new Date().getFullYear()} Teimur Gasanov
          </Typography.Text>
          <div className="flex gap-4">
            <Link
              color="light"
              href="https://github.com/teimurjan"
              underline="always"
            >
              GitHub
            </Link>
            <Link
              color="light"
              href="https://www.linkedin.com/in/teimur-gasanov"
              underline="always"
            >
              LinkedIn
            </Link>
            <Link
              color="light"
              href="https://www.toptal.com/resume/teimur-gasanov"
              underline="always"
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
