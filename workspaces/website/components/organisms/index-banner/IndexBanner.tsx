import { Fragment } from 'react'
import Resume, { PDFDownloadLink } from '@teimurjan/resume'
import { Banner } from '../../molecules'
import { Button, PersonaCanvas, Background } from '../../atoms'
import gqlClient from '@/gql-client'

const IndexBanner = async () => {
  const data = await gqlClient.Resume()
  const {
    bios: [{ fullName, headline, about }],
  } = data
  const shouldGeneratePDFInBrowser =
    process.env.NODE_ENV === 'development' && typeof window !== 'undefined'

  return (
    <Banner
      className="h-full"
      title={fullName}
      subtitle={headline}
      description={about}
      button={
        shouldGeneratePDFInBrowser ? (
          <PDFDownloadLink
            document={<Resume {...data} />}
            fileName="resume.pdf"
          >
            {({ url, loading }) => (
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  if (url) {
                    window.open(url, '_blank')
                  }
                }}
                disabled={loading}
              >
                Get resume
              </Button>
            )}
          </PDFDownloadLink>
        ) : (
          <Button.Link href="/resume.pdf">Get resume</Button.Link>
        )
      }
      image={
        <Fragment>
          <PersonaCanvas />
          <Background
            color="geometry-dark"
            className="w-[90%] pb-[90%] max-md:w-[60%] max-md:pb-[60%] rounded-3xl absolute z-[-1] bottom-0 left-[10%] animate-[rolllg_2s_ease-in-out_forwards]"
          />
          <Background
            color="geometry-light"
            className="w-[50%] pb-[50%] max-md:w-[30%] max-md:pb-[30%] rounded-3xl absolute z-[-1] bottom-0 left-[-30%] animate-[rollsm_2s_ease-in-out_forwards]"
          />
        </Fragment>
      }
    />
  )
}

export default IndexBanner
