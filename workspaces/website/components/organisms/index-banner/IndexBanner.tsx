import { Fragment } from 'react'
import Banner from '../../molecules/banner'
import PersonaCanvas from '../../atoms/persona-canvas'
import Background from '../../atoms/background'
import gqlClient from '@/gql-client'
import ResumeButton from '../../molecules/resume-button'

const IndexBanner = async () => {
  const data = await gqlClient.Bio()
  const {
    bios: [{ fullName, headline, about }],
  } = data

  return (
    <Banner
      className="h-full"
      title={fullName}
      subtitle={headline}
      description={about}
      button={<ResumeButton />}
      image={
        <Fragment>
          <PersonaCanvas />
          <Background
            color="geometry-dark"
            className="w-[90%] pb-[90%] max-md:w-[60%] max-md:pb-[60%] rounded-3xl absolute z-[-1] bottom-0 left-[10%] animate-[rolllg_2s_ease-in-out_forwards]"
          />
          <Background
            color="geometry-light"
            className="w-[50%] pb-[50%] max-md:w-[30%] max-md:pb-[30%] rounded-3xl absolute z-[-1] bottom-0 left-[-30%] animate-[rollsm_2s_ease-in-out_forwards]"
          />
        </Fragment>
      }
    />
  )
}

export default IndexBanner
