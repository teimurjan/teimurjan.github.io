import { StaticImage } from 'gatsby-plugin-image'
import { css, keyframes } from '@emotion/react'
import { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IndexBannerQuery } from '@teimurjan/gql-types'
import { theme } from '@teimurjan/utils'
import { Banner } from '../../molecules'
import { Button, Square } from '../../atoms'

const roll = (rotation: number) => keyframes`
  0% {
    transform: translateX(-100vw);
  }

  100% {
    transform: translateX(0) rotate(${rotation}deg);
  }
`

const query = graphql`
  query IndexBanner {
    gcms {
      bios {
        fullName
        headline
        about
      }
    }
  }
`

const IndexBanner = () => {
  const {
    gcms: {
      bios: [{ fullName, headline, about }],
    },
  } = useStaticQuery<IndexBannerQuery>(query)

  return (
    <Banner
      title={fullName}
      subtitle={headline}
      description={about}
      button={
        <Button.Link type="external" to="/resume.pdf">
          Get resume
        </Button.Link>
      }
      image={
        <Fragment>
          <StaticImage
            css={css``}
            src="../../../assets/images/me.png"
            alt="profile"
            placeholder="blurred"
            layout="fullWidth"
          />
          <Square
            sizes={{
              small: '80vw',
              medium: '35vw',
              large: '30vw',
              xlarge: '30vw',
            }}
            color="blue"
            css={css`
              position: absolute;
              z-index: -1;
              bottom: 5vw;
              left: 10%;
              animation: ${roll(200)} 2s
                ${theme.transition.timingFunction.easeInOutCubic} forwards;
              max-width: 500px;

              @media ${theme.screens.small.mediaUpTo} {
                left: 30%;
                bottom: 20%;
              }
            `}
          />
          <Square
            sizes={{
              small: '70vw',
              medium: '25vw',
              large: '20vw',
              xlarge: '15vw',
            }}
            color="blueAlpha"
            css={css`
              position: absolute;
              z-index: -1;
              bottom: 5vw;
              left: -30%;
              animation: ${roll(150)} 2s
                ${theme.transition.timingFunction.easeInOutCubic} forwards;
              max-width: 300px;

              @media ${theme.screens.small.mediaUpTo} {
                left: 0;
                bottom: 10%;
              }
            `}
          />
        </Fragment>
      }
    />
  )
}

export default IndexBanner
