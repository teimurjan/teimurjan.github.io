import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { mediaSizeLessThan, sizes } from '../../media'

const EXCERPT_HEIGHT = '2.4rem'

export const PostPreviewExcerpt = styled.div`
  color: var(--fontOnBackgroundSecondaryColor);
  font-size: 0.9rem;
  transition: all 0.3s linear 0s;
  max-height: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.25rem;
  line-height: 1.2rem;
  width: 100%;
  white-space: nowrap;

  @media ${mediaSizeLessThan(sizes.md)} {
    font-size: 0.8rem;
  }
`

export const PostPreviewWrapperLink = styled(Link)`
  display: block;
  height: 150px;
  margin: 0.5rem auto;
  transition: all 0.3s ease-in-out 0s;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  transform: ${props => (props.hide ? `scale(0,0)` : `scale(1,1)`)};
  transform-style: preserve-3d;
  background: var(--backgroundSecondaryColor);
  position: relative;
  &:hover {
    box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.5);
    ${PostPreviewExcerpt} {
      max-height: ${EXCERPT_HEIGHT};
    }
  }

  @media ${mediaSizeLessThan(sizes.md)} {
    width: 100%;
    ${PostPreviewExcerpt} {
      max-height: ${EXCERPT_HEIGHT};
      margin-bottom: 0.5rem;
    }
  }
`

export const PostPreviewTitle = styled.h4`
  font-size: 1.25rem;
  color: var(--fontOnBackgroundSecondaryColor);
  margin-bottom: 0.25rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;

  @media ${mediaSizeLessThan(sizes.md)} {
    font-size: 1.15rem;
  }
`

export const PostPreviewInfo = styled.div`
  padding: 0 0.75rem;
  position: absolute;
  width: 100%;
  bottom: 0;
`

export const DateThumbnail = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  background: var(--primaryColor);
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  color: var(--fontOnPrimaryColor);
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
`

export const DateThumbnailDay = styled.div`
  font-size: 1.2rem;
`

export const DateThumbnailMonth = styled.div`
  font-size: 0.6rem;
  text-transform: uppercase;
`

export const LevelOverlay = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  z-index: 1;
  background: var(--primaryColor);
  color: var(--fontOnPrimaryColor);
  border-radius: 0 5px 5px 0;
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;

  @media ${mediaSizeLessThan(sizes.md)} {
    font-size: 0.8rem;
  }
`

export const PostPreviewFooter = styled.div`
  color: var(--fontSecondaryOnBackgroundSecondaryColor);
  font-size: 0.9rem;
  padding-bottom: 0.5rem;

  @media ${mediaSizeLessThan(sizes.md)} {
    font-size: 0.8rem;
  }

  svg {
    max-height: 1rem;
  }
`
