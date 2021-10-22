import { Content, Layout } from '../components/atoms'
import { FullPageSection, Hero } from '../components/molecules'
import { TopNavigation, Footer } from '../components/organisms'

const NotFoundPage = () => {
  return (
    <Layout>
      <TopNavigation />
      <Content>
        <FullPageSection color="green">
          <Hero title="404 - Not found" />
        </FullPageSection>
      </Content>
      <Footer />
    </Layout>
  )
}

export default NotFoundPage
