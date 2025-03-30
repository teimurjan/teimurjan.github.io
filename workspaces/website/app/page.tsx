import Content from '../components/atoms/content'
import Section from '../components/molecules/section'
import ExperienceHistory from '../components/organisms/experience-history'
import Education from '../components/organisms/education'
import IndexBanner from '../components/organisms/index-banner'
import TopNavigation from '../components/organisms/top-navigation'
import Footer from '../components/organisms/footer'
import Skills from '../components/organisms/skills'
import Media from '../components/organisms/media'

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
        <Section color="light" className="pb-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Skills />
            <Education />
          </div>
        </Section>
        <Section color="light" className="pb-12">
          <Media />
        </Section>
      </Content>
      <Footer />
    </>
  )
}

export default Page
