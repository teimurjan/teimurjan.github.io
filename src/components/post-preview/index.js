import React from 'react'
import format from 'date-fns/format'
import distanceInWords from 'date-fns/distance_in_words'
import PropTypes from 'prop-types'
import {
  PostPreviewExcerpt,
  PostPreviewFooter,
  PostPreviewInfo,
  PostPreviewTitle,
  PostPreviewWrapperLink,
  DateThumbnail,
  DateThumbnailDay,
  DateThumbnailMonth,
  LevelOverlay,
} from './index.styles'

const PostPreview = ({
  post: {
    frontmatter,
    fields: { readingTime },
  },
  shouldHide,
}) => {
  const date = new Date(frontmatter.date)
  return (
    <PostPreviewWrapperLink to={`/blog/${frontmatter.slug}`} hide={shouldHide}>
      <LevelOverlay>
        {'🍩'.repeat(Math.ceil(readingTime.minutes / 5))} {readingTime.text}
      </LevelOverlay>
      <DateThumbnail>
        <DateThumbnailDay>{date.getDate()}</DateThumbnailDay>
        <DateThumbnailMonth>{format(date, 'MMM')}</DateThumbnailMonth>
      </DateThumbnail>
      <PostPreviewInfo>
        <PostPreviewTitle>{frontmatter.title}</PostPreviewTitle>
        <PostPreviewExcerpt>{frontmatter.excerpt}</PostPreviewExcerpt>
        <PostPreviewFooter>
          <i className="far fa-clock" /> {distanceInWords(new Date(), date)} ago.{' '}
        </PostPreviewFooter>
      </PostPreviewInfo>
    </PostPreviewWrapperLink>
  )
}

PostPreview.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      readingTime: PropTypes.shape({
        minutes: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      }),
    }),
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      slug: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }),
  }),
}

export default PostPreview
