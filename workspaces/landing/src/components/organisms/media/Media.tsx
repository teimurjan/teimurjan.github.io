import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { prettyDate, sortByDate, theme } from '@teimurjan/utils'
import { GraphCms_VideoEmbed, MediaQuery } from '@teimurjan/gql-types'
import { Link, ScrollToArea, Typography } from '../../atoms'
import { useAppContext } from '../../../context'
import { MediaCard, Timeline } from '../../molecules'
import Flex from '@react-css/flex'
import { Fragment, ReactNode } from 'react'

const query = graphql`
  query Media {
    gcms {
      publications {
        __typename
        id
        title
        link
        date
        opengraph {
          description
          image
          ogImage
          ogDescription
          ogTitle
          ogType
          ogUrl
          twitterCard
          twitterDescription
          twitterImageSrc
          twitterTitle
          url
        }
      }
      conferences {
        __typename
        id
        title
        topic
        link
        date
        image {
          url
        }
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

  const renderLink = (link: string) => (
    <Link
      css={css`
        margin-top: ${theme.spacing.small};
      `}
      to={link}
      underline="always"
    >
      Check it out 🔗
    </Link>
  )

  const renderMinified = (text: string, link: ReactNode) => (
    <Typography.Title variant="h5">
      {text}
      <br />
      {link}
    </Typography.Title>
  )

  const renderVideoEmbed = (
    title: string,
    videoEmbed:
      | Pick<GraphCms_VideoEmbed, 'link' | 'iframeOptions'>
      | undefined
      | null
  ) =>
    videoEmbed ? (
      <iframe
        title={title}
        css={css`
          display: block;
          width: 100%;
        `}
        src={videoEmbed.link}
        {...videoEmbed.iframeOptions}
      />
    ) : undefined

  const renderImage = (src: string, title: string) => (
    <img
      css={css`
        width: 100%;
        display: block;
      `}
      src={src}
      alt={title}
    />
  )

  const renderItem = (item: typeof mediaItems[0]) => {
    if (item.__typename === 'GraphCMS_Interview') {
      const link = item.videoEmbed && renderLink(item.videoEmbed.link)
      const media = renderVideoEmbed(item.title, item.videoEmbed)

      return (
        <Timeline.Item
          css={css`
            flex: 1;
          `}
          key={item.id}
          icon="📺"
          date={prettyDate(item.date)}
        >
          {media ? (
            <MediaCard title={item.title} media={media} subtitle={link} />
          ) : (
            renderMinified(item.title, link)
          )}
        </Timeline.Item>
      )
    }

    if (item.__typename === 'GraphCMS_Conference') {
      const link = renderLink(item.link ?? item.videoEmbed?.link)
      const videoMedia = renderVideoEmbed(item.title, item.videoEmbed)
      const imageMedia = item.image && renderImage(item.image.url, item.title)
      const media = imageMedia || videoMedia

      return (
        <Timeline.Item
          css={css`
            flex: 1;
          `}
          key={item.id}
          icon="🎙"
          date={prettyDate(item.date)}
        >
          {media ? (
            <MediaCard
              title={item.topic}
              media={media}
              subtitle={
                <Fragment>
                  Public speech at <b>{item.title}</b>.<br />
                  {link}
                </Fragment>
              }
            />
          ) : (
            renderMinified(item.title, link)
          )}
        </Timeline.Item>
      )
    }

    if (item.__typename === 'GraphCMS_Publication') {
      const title =
        item.opengraph.ogTitle ?? item.opengraph.twitterTitle ?? item.title
      const subtitle =
        item.opengraph.ogDescription ??
        item.opengraph.twitterDescription ??
        item.opengraph.description
      const image =
        item.opengraph.ogImage ??
        item.opengraph.twitterImageSrc ??
        item.opengraph.image

      const link = renderLink(item.link)

      return (
        <Timeline.Item key={item.id} icon="✏️" date={prettyDate(item.date)}>
          {title && subtitle && image ? (
            <MediaCard
              title={title}
              subtitle={
                <Flex flexDirection="column">
                  {subtitle}
                  {link}
                </Flex>
              }
              media={renderImage(image, title)}
            />
          ) : (
            renderMinified(title, link)
          )}
        </Timeline.Item>
      )
    }

    return null
  }

  return (
    <ScrollToArea id="activity" scrollOffset={-120}>
      <Typography.Title
        css={css`
          margin-bottom: ${theme.spacing.medium};
        `}
        variant="h2"
      >
        Activity
      </Typography.Title>
      <Timeline hideLine={!visitedLinks.has('activity')}>
        {mediaItems.map(renderItem)}
      </Timeline>
    </ScrollToArea>
  )
}

export default Media
