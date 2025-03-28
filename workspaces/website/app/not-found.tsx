import Content from '../components/atoms/content'
import FullPageSection from '../components/molecules/full-page-section'
import Hero from '../components/molecules/hero'
import TopNavigation from '../components/organisms/top-navigation'
import Footer from '../components/organisms/footer'
import notFound from '../assets/images/not-found.webp'

const NotFound = () => {
  return (
    <>
      <TopNavigation />
      <Content>
        <FullPageSection color="dark">
          <Hero title="404 - Not found" image={notFound} />
        </FullPageSection>
      </Content>
      <Footer />
    </>
  )
}

export default NotFound
