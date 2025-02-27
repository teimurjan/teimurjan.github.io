import { Content } from '../components/atoms'
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

const Page = () => {
  return (
    <>
      <TopNavigation />
      <Content>
        <Section color="dark">
          <IndexBanner />
        </Section>
        <Section color="light" className="pt-12 pb-20">
          <ExperienceHistory />
        </Section>
        <GridSection color="light" className="pb-16">
          <Skills />
          <Education />
        </GridSection>
        <Section color="light" className="pb-12">
          <Media />
        </Section>
      </Content>
      <Footer />
    </>
  )
}

export default Page
