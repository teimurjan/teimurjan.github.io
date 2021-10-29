import 'swiper/css'
import 'swiper/css/pagination'
import { Content, Layout } from '../components/atoms'
import { Section, GridSection } from '../components/molecules'
import {
  ExperienceHistory,
  Education,
  IndexBanner,
  TopNavigation,
  Footer,
  Skills,
  Media,
} from '../components/organisms'

const IndexPage = () => {
  return (
    <Layout>
      <TopNavigation />
      <Content>
        <Section color="green" spacings={['medium', undefined]}>
          <IndexBanner />
        </Section>
        <Section color="beige">
          <ExperienceHistory />
        </Section>
        <GridSection color="beige">
          <Skills />
          <Education />
        </GridSection>
        <Section color="beige" spacings={['medium', 'large']}>
          <Media />
        </Section>
      </Content>
      <Footer />
    </Layout>
  )
}

export default IndexPage
