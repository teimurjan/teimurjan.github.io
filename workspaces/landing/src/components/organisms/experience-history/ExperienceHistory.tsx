import { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { prettyRange, theme } from '@teimurjan/utils'
import { ExperienceHistoryQuery } from '@teimurjan/gql-types'
import Tooltip from 'rc-tooltip'
import { RichText, ScrollToArea, Tag, Typography } from '../../atoms'
import { Card } from '../../molecules'

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
        location
        locationIcon
      }
    }
  }
`

SwiperCore.use([Pagination, Navigation])

const handleSwiperBreakpointChange = (swiper: SwiperCore) =>
  swiper.el.setAttribute('data-breakpoint', swiper.currentBreakpoint)

const ExperienceHistory = () => {
  const {
    gcms: { experiences },
  } = useStaticQuery<ExperienceHistoryQuery>(query)

  return (
    <ScrollToArea
      id="experience"
      scrollOffset={-120}
      css={css`
        .swiper-pagination-bullet {
          width: 1rem;
          height: 1rem;
          background: ${theme.colors.geometry.blueAlpha};
        }

        .swiper-pagination-bullet-active {
          background: ${theme.colors.geometry.blue};
        }

        .swiper-button-prev {
          position: absolute;
          left: 1rem;
          bottom: 0;
          z-index: 20;
          /* TODO: polish controls */
          opacity: 0;
          transition: opacity 500ms
            ${theme.transition.timingFunction.easeInOutCubic};
          cursor: pointer;

          &:after {
            content: '⬅️';
            font-size: ${theme.typography.title.large.h2.fontSize};
          }

          @media ${theme.screens.small.mediaUpTo} {
            font-size: ${theme.typography.title.large.h3.fontSize};
          }
        }

        .swiper-button-next {
          position: absolute;
          right: 1rem;
          bottom: 0;
          z-index: 20;
          /* TODO: polish controls */
          opacity: 0;
          transition: opacity 500ms
            ${theme.transition.timingFunction.easeInOutCubic};
          cursor: pointer;

          &:after {
            content: '➡️';
            font-size: ${theme.typography.title.large.h2.fontSize};
          }

          @media ${theme.screens.small.mediaUpTo} {
            font-size: ${theme.typography.title.large.h3.fontSize};
          }
        }

        .swiper-button-disabled {
          opacity: 0;
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
        css={css`
          margin: 0 -${theme.spacing.small};
        `}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          [theme.screens.medium.breakpoint]: {
            slidesPerView: 2,
          },
          [theme.screens.large.breakpoint]: {
            slidesPerView: 3,
          },
        }}
        onBreakpoint={handleSwiperBreakpointChange}
        navigation
      >
        {experiences.map((experience) => {
          return (
            <SwiperSlide key={experience.id}>
              <Card
                css={css`
                  margin-top: ${theme.spacing.small};
                  margin-right: ${theme.spacing.small};
                  margin-left: ${theme.spacing.small};
                  margin-bottom: ${theme.spacing.xlarge};

                  height: 500px;

                  @media ${theme.screens.medium.mediaUpTo} {
                    height: 625px;
                  }
                `}
                imageSrc={experience.logo.url}
                imageAlt={experience.company}
                title={experience.position}
                subtitle1={
                  <Fragment>
                    at {experience.company}{' '}
                    <Tooltip
                      placement="right"
                      overlay={<span>{experience.location}</span>}
                      destroyTooltipOnHide
                    >
                      <span
                        css={css`
                          cursor: default;
                        `}
                      >
                        {experience.locationIcon}
                      </span>
                    </Tooltip>
                  </Fragment>
                }
                subtitle2={prettyRange(
                  experience.startDate,
                  experience.endDate
                )}
                overlay={!experience.endDate && <Tag color="blue">Now</Tag>}
              >
                <RichText html={experience.description.html} />
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </ScrollToArea>
  )
}

export default ExperienceHistory
