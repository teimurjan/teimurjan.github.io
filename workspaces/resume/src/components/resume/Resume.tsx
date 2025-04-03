import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Styles,
} from '@react-pdf/renderer'
import { YEAR_DATE_FORMAT, prettyRange, dateSorter } from '@teimurjan/utils'
import theme from '../../theme'
import Header from '../header'
import ResumeItem from '../resume-item'
import { ResumeProps } from './types'

const styles = StyleSheet.create({
  page: {
    backgroundColor: theme.colors.light,
    fontFamily: 'Helvetica',
    color: theme.colors.dark3,
    fontSize: 10,
  },
  wrapper: {
    width: '100%',
    padding: '0 16px',
  },
  container: {
    padding: '0 16px',
    width: '100%',
    height: '100%',
    marginBottom: 16,
  },
  horizontalDivider: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.dark3,
    margin: '10px 0',
  },
  layout: {
    flexDirection: 'row',
  },
  layoutLeft: {
    flexBasis: '61%',
    marginRight: '4%',
  },
  layoutRight: { flexBasis: '35%' },
  title: {
    color: theme.colors.dark3,
    fontSize: 12,
    textTransform: 'uppercase',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  itemMarginBottomSmall: {
    marginBottom: 4,
  },
  itemMarginBottom: {
    marginBottom: 8,
  },
  skills: {
    flexDirection: 'row',
  },
  skillsCol: {
    flex: 1,
    flexDirection: 'column',
  },
})

const getItemMarginStyle = (
  style: { marginBottom: number },
  index: number,
  itemsCount: number,
) => (index + 1 === itemsCount ? undefined : style) as Styles | undefined

const Resume = ({
  bios: [{ fullName, headline, about, location, phoneNumber, email }],
  educations,
  skills,
  experiences,
  publications,
  conferences,
  config = { skills: 'row' },
}: ResumeProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header
          title={fullName}
          subtitle={headline}
          location={location}
          email={email}
          phoneNumber={phoneNumber}
        />

        <View style={styles.wrapper}>
          <View style={styles.container}>
            <Text>{about}</Text>

            <View style={styles.horizontalDivider} />
            <View style={styles.layout}>
              <View style={styles.layoutLeft}>
                <Text style={styles.title}>Work Experience</Text>
                {experiences
                  .sort((a, b) => dateSorter(a.startDate, b.startDate))
                  .map((experience, index) => (
                    <ResumeItem
                      key={experience.id}
                      title={experience.position}
                      dates={prettyRange(
                        experience.startDate,
                        experience.endDate,
                        YEAR_DATE_FORMAT,
                      )}
                      subtitle={experience.company}
                      description={experience.description.html}
                      style={getItemMarginStyle(
                        styles.itemMarginBottom,
                        index,
                        experiences.length,
                      )}
                    />
                  ))}
              </View>

              <View style={styles.layoutRight}>
                <Text style={styles.title}>Education</Text>
                <View>
                  {educations.map((education, index) => (
                    <ResumeItem
                      key={education.id}
                      dates={prettyRange(
                        education.startDate,
                        education.endDate,
                        YEAR_DATE_FORMAT,
                      )}
                      title={`${education.degree}\nin ${education.areaOfStudy}`}
                      subtitle={education.school}
                      style={getItemMarginStyle(
                        styles.itemMarginBottom,
                        index,
                        educations.length,
                      )}
                    />
                  ))}
                </View>

                <View style={styles.horizontalDivider} />

                <Text style={styles.title}>Skills</Text>
                <View style={styles.skills}>
                  {config.skills === 'column' ? (
                    <>
                      <View style={styles.skillsCol}>
                        {skills.slice(0, skills.length / 2).map((skill) => (
                          <Text
                            key={skill.id}
                            style={styles.itemMarginBottomSmall}
                          >
                            {skill.title}
                          </Text>
                        ))}
                      </View>
                      <View style={styles.skillsCol}>
                        {skills.slice(skills.length / 2).map((skill) => (
                          <Text
                            key={skill.id}
                            style={styles.itemMarginBottomSmall}
                          >
                            {skill.title}
                          </Text>
                        ))}
                      </View>
                    </>
                  ) : (
                    <View style={styles.skillsCol}>
                      <Text>
                        {skills.map((skill) => skill.title).join(', ')}
                      </Text>
                    </View>
                  )}
                </View>

                <View style={styles.horizontalDivider} />

                <Text style={styles.title}>Publications</Text>
                <View>
                  {publications
                    .sort((a, b) => dateSorter(a.date, b.date))
                    .map((publication, index) => (
                      <ResumeItem
                        key={publication.id}
                        title={publication.title}
                        subtitle={new URL(publication.link)}
                        style={getItemMarginStyle(
                        styles.itemMarginBottomSmall,
                        index,
                        publications.length,
                      )}
                    />
                  ))}
                </View>

                <View style={styles.horizontalDivider} />

                <Text style={styles.title}>Conferences</Text>
                <View>
                  {conferences
                    .sort((a, b) => dateSorter(a.date, b.date))
                    .map((conference, index) => (
                      <ResumeItem
                        key={conference.id}
                        title={conference.topic}
                        subtitle={conference.title}
                        style={getItemMarginStyle(
                        styles.itemMarginBottomSmall,
                        index,
                        publications.length,
                      )}
                    />
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Resume
