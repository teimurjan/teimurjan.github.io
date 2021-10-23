import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/react'
import { Fragment } from 'react'
import { format, parseISO } from 'date-fns'
import { theme } from '../../../utils'
import { EducationQuery } from '../../../__generated__/graphql'
import { RichText, ScrollToArea, Typography } from '../../atoms'

const query = graphql`
  query Education {
    gcms {
      educations(orderBy: startDate_DESC) {
        id
        school
        degree
        description {
          html
        }
        areaOfStudy
        startDate
        endDate
      }
    }
  }
`

const DATE_FORMAT = 'MMM yyyy'

const Education = () => {
  const {
    gcms: { educations },
  } = useStaticQuery<EducationQuery>(query)

  return (
    <ScrollToArea
      id="education"
      scrollOffset={-120}
      css={css`
        padding-right: ${theme.spacing.small};
      `}
    >
      <Typography.Title
        css={css`
          margin-bottom: ${theme.spacing.medium};
        `}
        variant="h2"
      >
        Education
      </Typography.Title>
      {educations.map((education) => (
        <Fragment key={education.id}>
          <Typography.Title
            css={css`
              margin-bottom: ${theme.spacing.xsmall};
            `}
            variant="h4"
          >
            {education.school}
          </Typography.Title>
          <Typography.Title
            css={css`
              margin-bottom: ${theme.spacing.xsmall};
            `}
            variant="h5"
          >
            {education.degree} in {education.areaOfStudy}
          </Typography.Title>
          <Typography.Text>
            {format(parseISO(education.startDate), DATE_FORMAT)} -{' '}
            {format(parseISO(education.endDate), DATE_FORMAT)}
          </Typography.Text>
          <Typography.Text container>
            <RichText html={education.description.html} />
          </Typography.Text>
        </Fragment>
      ))}
    </ScrollToArea>
  )
}

export default Education
