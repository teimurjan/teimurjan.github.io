import { Fragment } from 'react'
import { prettyRange } from '@teimurjan/utils'
import RichText from '../../atoms/rich-text'
import Typography from '../../atoms/typography'
import gqlClient from '@/gql-client'
import { Anchor } from '@/utils'

const Education = async () => {
  const { educations } = await gqlClient.Education()

  return (
    <div className="pr-2" id={Anchor.Education}>
      <Typography.Title className="mb-8" variant="h2">
        Education
      </Typography.Title>
      {educations.map((education) => (
        <Fragment key={education.id}>
          <Typography.Title className="mb-1" variant="h4">
            {education.school}
          </Typography.Title>
          <Typography.Title className="mb-1" variant="h5">
            {education.degree} in {education.areaOfStudy}
          </Typography.Title>
          <Typography.Text>
            {prettyRange(education.startDate, education.endDate)}
          </Typography.Text>
          <Typography.Text container>
            <RichText html={education.description.html} />
          </Typography.Text>
        </Fragment>
      ))}
    </div>
  )
}

export default Education
