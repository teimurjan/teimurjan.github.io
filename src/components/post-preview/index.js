import React from 'react'
import format from 'date-fns/format'
import distanceInWords from 'date-fns/distance_in_words'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock'
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
    <PostPreviewWrapperLink to={frontmatter.path} hide={shouldHide}>
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
          <Icon icon={faClock} /> {distanceInWords(new Date(), date)} ago.{' '}
        </PostPreviewFooter>
      </PostPreviewInfo>
    </PostPreviewWrapperLink>
  )
}

export default PostPreview
