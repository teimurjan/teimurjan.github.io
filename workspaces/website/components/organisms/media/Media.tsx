import { Fragment } from 'react'
import { prettyDate, sortByDate } from '@teimurjan/utils'
import { Link, Typography } from '../../atoms'
import { MediaCard, Timeline } from '../../molecules'
import gqlClient from '@/gql-client'
import opengraphs from '@/__generated__/opengraphs'
import { Anchor } from '@/utils'

const Media = async () => {
  const { publications, conferences, interviews } = await gqlClient.Media()

  const mediaItems = sortByDate([
    ...publications.map((publication) => ({
      ...publication,
      opengraph: opengraphs[publication.link],
    })),
    ...conferences,
    ...interviews,
  ])

  const renderLink = (link: string) => (
    <Link className="mt-2 underline" href={link}>
      Check it out 🔗
    </Link>
  )

  const renderItem = (item: (typeof mediaItems)[0]) => {
    if (item.__typename === 'Interview') {
      return (
        <Timeline.Item key={item.id} icon="📺" date={prettyDate(item.date)}>
          {item.videoEmbed?.iframeOptions ? (
            <MediaCard
              title={item.title}
              media={
                <iframe
                  title={item.title}
                  className="w-full"
                  src={item.videoEmbed.link}
                  {...item.videoEmbed.iframeOptions}
                />
              }
              subtitle={renderLink(item.videoEmbed.link)}
            />
          ) : (
            <Typography.Title variant="h5">
              {item.title}
              <br />
              {renderLink(item.videoEmbed?.link ?? '')}
            </Typography.Title>
          )}
        </Timeline.Item>
      )
    }

    if (item.__typename === 'Conference') {
      return (
        <Timeline.Item key={item.id} icon="🎙" date={prettyDate(item.date)}>
          <MediaCard
            title={item.topic}
            media={
              item.image ? (
                <img className="w-full" src={item.image.url} alt={item.title} />
              ) : (
                item.videoEmbed && (
                  <iframe
                    title={item.title}
                    className="w-full"
                    src={item.videoEmbed.link}
                    {...item.videoEmbed.iframeOptions}
                  />
                )
              )
            }
            subtitle={
              <Fragment>
                Public speech at <b>{item.title}</b>.<br />
                {renderLink(item.link ?? item.videoEmbed?.link)}
              </Fragment>
            }
          />
        </Timeline.Item>
      )
    }

    if (item.__typename === 'Publication') {
      const title =
        item.opengraph?.ogTitle || item.opengraph?.twitterTitle || item.title
      const image =
        item.opengraph?.ogImage ||
        item.opengraph?.twitterImageSrc ||
        item.opengraph?.image
      const description =
        item.opengraph?.ogDescription ||
        item.opengraph?.twitterDescription ||
        item.opengraph?.description

      return (
        <Timeline.Item key={item.id} icon="✏️" date={prettyDate(item.date)}>
          <MediaCard
            title={title}
            subtitle={
              <Fragment>
                {description}
                <br />
                {renderLink(item.link)}
              </Fragment>
            }
            media={
              image ? (
                <img className="w-full" src={image} alt={item.title} />
              ) : undefined
            }
          />
        </Timeline.Item>
      )
    }

    return null
  }

  return (
    <div>
      <span id={Anchor.Media} />
      <Typography.Title className="mb-8" variant="h2">
        Activity
      </Typography.Title>
      <Timeline>{mediaItems.map(renderItem)}</Timeline>
    </div>
  )
}

export default Media
