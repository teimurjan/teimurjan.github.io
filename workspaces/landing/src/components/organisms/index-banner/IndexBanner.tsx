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
            src="../../../assets/images/me.png"
            alt="profile"
            placeholder="tracedSVG"
            tracedSVGOptions={{ color: '#05386b' }}
            layout="fullWidth"
          />
          <Square
            sizes={{
              small: '90vw',
              medium: '40vw',
              large: '30vw',
              xlarge: '30vw',
            }}
            color="blue"
            css={css`
              position: absolute;
              z-index: -1;
              bottom: 0;
              left: 10%;
              animation: ${roll(200)} 2s
                ${theme.transition.timingFunction.easeInOutCubic} forwards;
              max-width: 500px;

              @media ${theme.screens.small.mediaUpTo} {
                left: 30%;
                bottom: 15%;
              }
            `}
          />
          <Square
            sizes={{
              small: '80vw',
              medium: '35vw',
              large: '20vw',
              xlarge: '15vw',
            }}
            color="blueAlpha"
            css={css`
              position: absolute;
              z-index: -1;
              bottom: 0;
              left: -30%;
              animation: ${roll(150)} 2s
                ${theme.transition.timingFunction.easeInOutCubic} forwards;
              max-width: 300px;

              @media ${theme.screens.small.mediaUpTo} {
                left: -10%;
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