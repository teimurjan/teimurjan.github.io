import { BlobProvider } from '@react-pdf/renderer'
import { graphql, useStaticQuery } from 'gatsby'
import { ResumeQuery } from '../../../__generated__/graphql'
import { Button } from '../../atoms'
import Resume from './Resume'

const query = graphql`
  query Resume {
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

const ResumeLink = () => {
  const queryResult = useStaticQuery<ResumeQuery>(query)

  return typeof window !== 'undefined' ? (
    <BlobProvider document={<Resume {...queryResult} />}>
      {({ url }) =>
        !url ? null : <Button.Link to={url}>Get resume</Button.Link>
      }
    </BlobProvider>
  ) : null
}

export default ResumeLink
