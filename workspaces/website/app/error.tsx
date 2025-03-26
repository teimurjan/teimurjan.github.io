'use client'
import { Content } from '../components/atoms'
import { FullPageSection, Hero } from '../components/molecules'
import { TopNavigation, Footer } from '../components/organisms'
import error from '../assets/images/error.webp'

const NotFound = () => {
  return (
    <>
      <TopNavigation />
      <Content>
        <FullPageSection color="dark">
          <Hero title="Something went wrong" image={error} />
        </FullPageSection>
      </Content>
      <Footer />
    </>
  )
}

export default NotFound
