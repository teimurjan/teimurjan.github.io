import { resolve } from 'path'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'
import {
  calculatePercentage,
  prettyRange,
  sortByDate,
  theme,
} from '@teimurjan/utils'
import { ResumeSsrQuery } from '@teimurjan/gql-types'
import Header from './components/header'
import Contacts from './components/contacts'
import Profile from './components/profile'
import EducationItem from './components/education-item'
import SkillItem from './components/skill-item'
import PublicationItem from './components/publication-item'
import ConferenceItem from './components/conference-item'
import ExperienceItem from './components/experience-item'

Font.register({
  family: 'ShareTech',
  src: resolve(__dirname, './assets/fonts/ShareTech-Regular.ttf'),
})
Font.register({
  family: 'ShareTechMono',
  src: resolve(__dirname, './assets/fonts/ShareTechMono-Regular.ttf'),
})

const styles = StyleSheet.create({
  page: {
    backgroundColor: theme.colors.resume.grey,
    fontFamily: 'ShareTech',
    color: theme.colors.resume.black,
    fontSize: 10,
  },
  wrapper: {
    width: '100%',
    padding: '0 20px',
  },
  container: {
    backgroundColor: theme.colors.resume.white,
    padding: '16px 20px',
    width: '100%',
    height: '100%',
  },
  horizontalDivider: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.resume.black,
    margin: '15px 0',
  },
  layout: {
    flexDirection: 'row',
  },
  layoutSmallItem: {
    flexBasis: '35%',
    paddingRight: 10,
  },
  layoutLargeItem: {
    flexBasis: '65%',
    paddingLeft: 30,
    position: 'relative',
  },
  title: {
    color: theme.colors.resume.black,
    fontSize: 16,
    textDecoration: 'underline',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  section: {
    paddingBottom: 15,
    position: 'relative',
  },
  verticalDivider: {
    position: 'absolute',
    left: 15,
    top: 0,
    height: '100%',
    width: 1,
    backgroundColor: theme.colors.resume.black,
  },
  itemSmall: {
    marginBottom: 2.5,
  },
  item: {
    marginBottom: 5,
  },
  itemLarge: {
    marginBottom: 10,
  },
})

const getItemStyle = (
  style: Record<string, unknown>,
  index: number,
  itemsCount: number
) => (index + 1 === itemsCount ? undefined : style)

const Resume = ({
  gcms: {
    bios: [{ fullName, headline, about, location, phoneNumber, email }],
    educations,
    skills,
    experiences,
    publications,
    conferences,
    ...rest
  },
}: ResumeSsrQuery) => {
  return (
    <Document {...rest}>
      <Page size="A4" style={styles.page}>
        <Header title={fullName} subtitle={headline} />
        <Contacts location={location} email={email} phoneNumber={phoneNumber} />
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <Profile title="Profile" text={about} />
            <View style={styles.horizontalDivider} />
            <View style={styles.layout}>
              <View style={styles.layoutSmallItem}>
                <Text style={styles.title}>Education</Text>
                <View style={styles.section}>
                  {educations.map((education, index) => (
                    <EducationItem
                      key={education.id}
                      dates={prettyRange(
                        education.startDate,
                        education.endDate
                      )}
                      degree={`${education.degree} in ${education.areaOfStudy}`}
                      school={education.school}
                      style={getItemStyle(
                        styles.item,
                        index,
                        educations.length
                      )}
                    />
                  ))}
                </View>
                <Text style={styles.title}>Skills</Text>
                <View style={styles.section}>
                  {skills.map((skill, index) => {
                    const percentage = calculatePercentage(
                      skills,
                      'yearsOfExperience',
                      skill
                    )

                    return (
                      <SkillItem
                        key={skill.id}
                        title={skill.title}
                        percentage={percentage}
                        style={getItemStyle(styles.item, index, skills.length)}
                      />
                    )
                  })}
                </View>
                <Text style={styles.title}>Publications</Text>
                <View style={styles.section}>
                  {sortByDate(publications).map((publication, index) => (
                    <PublicationItem
                      key={publication.id}
                      title={publication.title}
                      link={publication.link}
                      style={getItemStyle(
                        styles.itemSmall,
                        index,
                        skills.length
                      )}
                    />
                  ))}
                </View>
                <Text style={styles.title}>Conferences</Text>
                <View style={styles.section}>
                  {sortByDate(conferences).map((conference, index) => (
                    <ConferenceItem
                      key={conference.id}
                      topic={conference.topic}
                      title={conference.title}
                      style={getItemStyle(
                        styles.itemSmall,
                        index,
                        skills.length
                      )}
                    />
                  ))}
                </View>
              </View>
              <View style={styles.layoutLargeItem}>
                <Text style={styles.title}>Experience</Text>
                <View style={styles.verticalDivider} />
                {experiences.map((experience, index) => (
                  <ExperienceItem
                    key={experience.id}
                    position={experience.position}
                    dates={prettyRange(
                      experience.startDate,
                      experience.endDate
                    )}
                    company={experience.company}
                    description={experience.description.html}
                    style={getItemStyle(
                      styles.itemLarge,
                      index,
                      experiences.length
                    )}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Resume
