import { css, keyframes } from '@emotion/react'
import { Fragment, Suspense } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IndexBannerQuery } from '@teimurjan/gql-types'
import Resume, { PDFDownloadLink } from '@teimurjan/resume'
import { theme } from '@teimurjan/utils'
import { Banner } from '../../molecules'
import { Button, Persona, Square, PersonaCanvas } from '../../atoms'
import { useLazyInitialization } from '../../../hooks'

const roll = (rotation: number) => keyframes`
  0% {
    transform: translateX(-100vw);
  }

  100% {
    transform: translateX(0) rotate(${rotation}deg);
  }
`

const query = graphql`
  query IndexBanner {
    gcms {
      bios {
        fullName
        headline
        about
        location
        phoneNumber
        email
      }
      educations(orderBy: startDate_DESC) {
        id
        school
        degree
        areaOfStudy
        startDate
        endDate
      }
      skills(orderBy: yearsOfExperience_DESC) {
        id
        title
        yearsOfExperience
      }
      experiences(orderBy: startDate_DESC) {
        id
        company
        position
        startDate
        endDate
        description {
          html
        }
      }
      publications {
        id
        title
        link
        date
      }
      conferences {
        id
        title
        topic
        link
        date
      }
    }
  }
`

const renderPersona = (key: string) => (
  <Suspense fallback={null}>
    <Persona key={key} />
  </Suspense>
)

const IndexBanner = () => {
  const data = useStaticQuery<IndexBannerQuery>(query)
  const {
    gcms: {
      bios: [{ fullName, headline, about }],
    },
  } = data
  const { value: shouldGeneratePDFInBrowser, isInitialized } =
    useLazyInitialization(
      process.env.NODE_ENV === 'development' && typeof window !== 'undefined',
      false
    )

  return (
    <Banner
      css={css`
        height: 100%;
      `}
      title={fullName}
      subtitle={headline}
      description={about}
      button={
        shouldGeneratePDFInBrowser && isInitialized ? (
          <PDFDownloadLink
            document={<Resume {...data} />}
            fileName="resume.pdf"
          >
            {({ url, loading }) => (
              <Button
                onClick={(e) => {
                  // Prevent download action to be triggered
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
          <Button.Link type="external" to="/resume.pdf">
            Get resume
          </Button.Link>
        )
      }
      image={
        <Fragment>
          <PersonaCanvas render={renderPersona} />

          <Square
            size="100%"
            color="dark"
            css={css`
              position: absolute;
              z-index: -1;
              bottom: 0;
              left: 10%;
              animation: ${roll(200)} 2s
                ${theme.transition.timingFunction.easeInOutCubic} forwards;
              max-width: 500px;

              @media ${theme.screens.small.mediaUpTo} {
                left: 30%;
              }
            `}
          />
          <Square
            size="50%"
            color="light"
            css={css`
              position: absolute;
              z-index: -1;
              bottom: 0;
              left: -30%;
              animation: ${roll(150)} 2s
                ${theme.transition.timingFunction.easeInOutCubic} forwards;
              max-width: 300px;

              @media ${theme.screens.small.mediaUpTo} {
                left: -10%;
              }
            `}
          />
        </Fragment>
      }
    />
  )
}

export default IndexBanner
