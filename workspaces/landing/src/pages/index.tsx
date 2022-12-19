import 'swiper/css'
import 'swiper/css/pagination'
import 'rc-tooltip/assets/bootstrap.css'
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
        <Section color="dark" spacings={['medium', undefined]}>
          <IndexBanner />
        </Section>
        <Section color="light">
          <ExperienceHistory />
        </Section>
        <GridSection color="light">
          <Skills />
          <Education />
        </GridSection>
        <Section color="light" spacings={['medium', 'large']}>
          <Media />
        </Section>
      </Content>
      <Footer />
    </Layout>
  )
}

export default IndexPage
