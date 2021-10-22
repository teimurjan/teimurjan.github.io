import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/react'
import { format, parseISO } from 'date-fns'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import { theme } from '../../../utils'
import { ExperienceHistoryQuery } from '../../../__generated__/graphql'
import { RichText, Typography } from '../../atoms'
import { Card } from '../../molecules'
import { useMedia } from '../../../hooks'

const query = graphql`
  query ExperienceHistory {
    gcms {
      experiences(orderBy: startDate_DESC) {
        id
        logo {
          url(
            transformation: {
              image: { resize: { width: 200, height: 200, fit: clip } }
            }
          )
        }
        company
        position
        startDate
        endDate
        description {
          html
        }
      }
    }
  }
`

SwiperCore.use([Pagination])

const DATE_FORMAT = 'MMM yyyy'

const ExperienceHistory = () => {
  const {
    gcms: { experiences },
  } = useStaticQuery<ExperienceHistoryQuery>(query)

  const slidesPerView = useMedia(
    [theme.screens.medium.mediaUpTo, theme.screens.large.mediaUpTo],
    [1, 2],
    3
  )

  return (
    <div
      id="experience"
      css={css`
        .swiper-pagination-bullet {
          width: 1rem;
          height: 1rem;
          background: ${theme.colors.geometry.blueAlpha};
        }

        .swiper-pagination-bullet-active {
          background: ${theme.colors.geometry.blue};
        }
      `}
    >
      <Typography.Title
        css={css`
          margin-bottom: ${theme.spacing.medium};
        `}
        variant="h2"
      >
        Experience
      </Typography.Title>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={0}
        pagination={{ clickable: true }}
      >
        {experiences.map((experience, index) => {
          return (
            <SwiperSlide key={experience.id}>
              <Card
                css={css`
                  margin-top: ${theme.spacing.small};
                  margin-right: ${theme.spacing.small};
                  margin-bottom: ${theme.spacing.xlarge};

                  height: 475px;

                  @media ${theme.screens.medium.mediaUpTo} {
                    height: 625px;
                  }
                `}
                color={index === 0 ? 'blue' : undefined}
                imageSrc={experience.logo.url}
                imageAlt={experience.company}
                title={experience.position}
                subtitle1={`at ${experience.company}`}
                subtitle2={`${format(
                  parseISO(experience.startDate),
                  DATE_FORMAT
                )} - ${
                  experience.endDate
                    ? format(parseISO(experience.endDate), DATE_FORMAT)
                    : 'Now'
                }`}
              >
                <RichText html={experience.description.html} />
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ExperienceHistory
