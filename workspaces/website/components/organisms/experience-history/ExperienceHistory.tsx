import { prettyRange } from '@teimurjan/utils'
import gqlClient from '@/gql-client'
import { RichText, Tag, Typography } from '../../atoms'
import { Card, Tooltip } from '../../molecules'
import CardCarousel from '../card-carousel'
import { Anchor } from '@/utils'

const ExperienceHistory = async () => {
  const { experiences } = await gqlClient.ExperienceHistory()
  return (
    <div id={Anchor.Experience}>
      <Typography.Title className="mb-8" variant="h2">
        Experience
      </Typography.Title>

      <CardCarousel>
        {experiences.map((experience) => (
          <Card
            key={experience.id}
            className="mt-2 mx-2 mb-8 h-[500px] max-sm:h-[600px]"
            image={{
              src: experience.logo.url,
              alt: experience.company,
            }}
            title={experience.position}
            subtitle1={
              <>
                at {experience.company}{' '}
                <Tooltip
                  id={experience.id}
                  content={experience.location ?? ''}
                  placement="right"
                >
                  {experience.locationIcon}
                </Tooltip>
              </>
            }
            subtitle2={prettyRange(experience.startDate, experience.endDate)}
            overlay={!experience.endDate && <Tag color="dark2">Now</Tag>}
          >
            <RichText html={experience.description.html} />
          </Card>
        ))}
      </CardCarousel>
    </div>
  )
}

export default ExperienceHistory
