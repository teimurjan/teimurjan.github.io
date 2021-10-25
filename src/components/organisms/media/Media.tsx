import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { prettyDate, sortByDate, theme } from '../../../utils'
import { MediaQuery } from '../../../__generated__/graphql'
import { Link, ScrollToArea, Typography } from '../../atoms'
import { useAppContext } from '../../../context'
import { Timeline } from '../../molecules'

const query = graphql`
  query Media {
    gcms {
      publications {
        __typename
        id
        title
        link
        date
      }
      conferences {
        __typename
        id
        title
        topic
        link
        date
        videoEmbed {
          link
          iframeOptions
        }
      }
      interviews {
        __typename
        id
        title
        date
        videoEmbed {
          link
          iframeOptions
        }
      }
    }
  }
`

const Media = () => {
  const {
    gcms: { publications, conferences, interviews },
  } = useStaticQuery<MediaQuery>(query)

  const { visitedLinks } = useAppContext()

  const mediaItems = sortByDate([
    ...publications,
    ...conferences,
    ...interviews,
  ])

  const renderItem = (item: typeof mediaItems[0]) => {
    if (item.__typename === 'GraphCMS_Conference') {
      return (
        <Timeline.Item key={item.id} icon="🎙" date={prettyDate(item.date)}>
          <Typography.Title variant="h5">
            {item.title}
            <Link to={item.link} underline="always">
              {item.topic} at {item.title}
            </Link>
          </Typography.Title>
          {item.videoEmbed && (
            <iframe
              css={css`
                display: block;
                margin-top: ${theme.spacing.small};
              `}
              src={item.videoEmbed?.link}
              {...item.videoEmbed?.iframeOptions}
            />
          )}
        </Timeline.Item>
      )
    }

    if (item.__typename === 'GraphCMS_Interview') {
      return (
        <Timeline.Item key={item.id} icon="📺" date={prettyDate(item.date)}>
          <Typography.Title
            variant="h5"
            css={css`
              margin-bottom: auto;
            `}
          >
            TV: {item.title}
          </Typography.Title>
          {item.videoEmbed && (
            <iframe
              css={css`
                display: block;
                margin-top: ${theme.spacing.small};
              `}
              src={item.videoEmbed?.link}
              {...item.videoEmbed?.iframeOptions}
            />
          )}
        </Timeline.Item>
      )
    }

    if (item.__typename === 'GraphCMS_Publication') {
      return (
        <Timeline.Item key={item.id} icon="✏️" date={prettyDate(item.date)}>
          <Typography.Title variant="h5">
            {item.title}
            <Link to={item.link} underline="always">
              Check it out 🔗
            </Link>
          </Typography.Title>
        </Timeline.Item>
      )
    }

    return null
  }

  return (
    <ScrollToArea id="media" scrollOffset={-120}>
      <Typography.Title
        css={css`
          margin-bottom: ${theme.spacing.medium};
        `}
        variant="h2"
      >
        Media
      </Typography.Title>
      <Timeline hideLine={!visitedLinks.has('media')}>
        {mediaItems.map(renderItem)}
      </Timeline>
    </ScrollToArea>
  )
}

export default Media
