'use client'
import Content from '../components/atoms/content'
import FullPageSection from '../components/molecules/full-page-section'
import Hero from '../components/molecules/hero'
import TopNavigation from '../components/organisms/top-navigation'
import Footer from '../components/organisms/footer'
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
