import { Content } from '../components/atoms'
import { FullPageSection, Hero } from '../components/molecules'
import { TopNavigation, Footer } from '../components/organisms'

const NotFound = () => {
  return (
    <>
      <TopNavigation />
      <Content>
        <FullPageSection color="dark">
          <Hero title="404 - Not found" />
        </FullPageSection>
      </Content>
      <Footer />
    </>
  )
}

export default NotFound
