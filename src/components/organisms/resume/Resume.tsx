import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Svg,
  Path,
  Circle,
  Polyline,
  Link,
} from '@react-pdf/renderer'
import Html from 'react-pdf-html'
import {
  calculatePercentage,
  prettyRange,
  sortByDate,
  theme,
} from '../../../utils'
import ShareTech from '../../../assets/fonts/ShareTech-Regular.ttf'
import ShareTechMono from '../../../assets/fonts/ShareTechMono-Regular.ttf'
import { ResumeQuery } from '../../../__generated__/graphql'

Font.register({
  family: 'ShareTech',
  src: ShareTech,
})
Font.register({
  family: 'ShareTechMono',
  src: ShareTechMono,
})

const styles = StyleSheet.create({
  page: {
    backgroundColor: theme.colors.resume.grey,
    fontFamily: 'ShareTech',
    color: theme.colors.resume.black,
    fontSize: 10,
  },
  headerSection: {
    backgroundColor: theme.colors.resume.green,
    width: '100%',
    padding: '20px 40px 0 40px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'ShareTechMono',
  },
  headerContainer: {
    width: '100%',
    padding: '20px 50px',
    backgroundColor: theme.colors.resume.white,
  },
  headerTitle: {
    fontSize: 30,
  },
  headerSubtitle: { fontSize: 14 },
  contactsSection: {
    padding: '10px 40px',
    width: '100%',
    backgroundColor: theme.colors.resume.black,
  },
  contactsContainer: {
    width: '100%',
    color: theme.colors.resume.white,
    alignItems: 'center',
    flexDirection: 'row',
  },
  contact: {
    flex: 1,
    color: theme.colors.resume.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactIcon: {
    marginRight: 5,
  },
  mainSection: {
    width: '100%',
    padding: '0 40px',
  },
  mainContainer: {
    backgroundColor: theme.colors.resume.white,
    padding: '20px 20px',
    width: '100%',
    height: '100%',
  },
  profileTitle: {
    color: theme.colors.resume.black,
    fontSize: 16,
    textDecoration: 'underline',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 15,
  },
  profileText: {
    textAlign: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.resume.black,
    margin: '15px 0',
  },
  mainContent: {
    flexDirection: 'row',
  },
  mainContentSmallColumn: {
    flexBasis: '35%',
    paddingRight: 10,
  },
  mainContentLargeColumn: {
    flexBasis: '65%',
    paddingLeft: 30,
    position: 'relative',
  },
  contentTitle: {
    color: theme.colors.resume.black,
    fontSize: 16,
    textDecoration: 'underline',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  contentHint: {
    color: theme.colors.resume.darkGrey,
  },
  mainContentSection: {
    paddingBottom: 15,
    position: 'relative',
  },
  educationDegree: {
    margin: '1.25px 0',
  },
  skill: {},
  skillLabel: {
    marginBottom: 2.5,
  },
  skillProgress: {
    height: 5,
    backgroundColor: theme.colors.resume.grey,
    borderRadius: 5,
    position: 'relative',
    width: '100%',
    marginBottom: 10,
  },
  skillProgressInner: {
    height: '100%',
    backgroundColor: theme.colors.resume.black,
    borderRadius: 5,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  experiencePosition: {
    margin: '1.25px 0',
  },
  experienceIcon: {
    position: 'absolute',
    left: -20,
    top: 2.5,
    border: `2px solid ${theme.colors.resume.green}`,
    borderRadius: 5.5,
    width: 11,
    height: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.resume.white,
  },
  experienceIconInner: {
    borderRadius: 2.5,
    width: 5,
    height: 5,
    backgroundColor: theme.colors.resume.green,
  },
  experienceLine: {
    position: 'absolute',
    left: 15,
    top: 0,
    height: '100%',
    width: 1,
    backgroundColor: theme.colors.resume.black,
  },
  experienceDescription: {
    fontSize: 10,
    backgroundColor: theme.colors.resume.darkGrey,
  },
  media: {
    flexDirection: 'row',
  },
  mediaText: {
    marginBottom: 2.5,
  },
  mediaLink: {
    color: theme.colors.resume.black,
    textDecoration: 'none',
  },
  listStyleDisc: {
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: theme.colors.resume.black,
    marginRight: 5,
    marginTop: 5,
  },
})

interface SvgProps {
  style?: object
}

const MapPinSvg = ({ style }: SvgProps) => (
  <Svg style={style} width="14" height="14" viewBox="0 0 24 24">
    <Path
      stroke={theme.colors.resume.white}
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    ></Path>
    <Circle stroke={theme.colors.resume.white} cx="12" cy="10" r="3"></Circle>
  </Svg>
)

const MailSvg = ({ style }: SvgProps) => (
  <Svg style={style} width="14" height="14" viewBox="0 0 24 24">
    <Path
      stroke={theme.colors.resume.white}
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    ></Path>
    <Polyline
      stroke={theme.colors.resume.white}
      points="22,6 12,13 2,6"
    ></Polyline>
  </Svg>
)

const PhoneSvg = ({ style }: SvgProps) => (
  <Svg style={style} width="14" height="14" viewBox="0 0 24 24">
    <Path
      stroke={theme.colors.resume.white}
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    ></Path>
  </Svg>
)

const Resume = ({
  gcms: {
    bios: [{ fullName, headline, about, location, phoneNumber, email }],
    educations,
    skills,
    experiences,
    publications,
    conferences,
  },
}: ResumeQuery) => {
  return typeof window !== 'undefined' ? (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerSection}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{fullName}</Text>
            <Text style={styles.headerSubtitle}>{headline}</Text>
          </View>
        </View>
        <View style={styles.contactsSection}>
          <View style={styles.contactsContainer}>
            <View style={styles.contact}>
              <MapPinSvg style={styles.contactIcon} />
              <Text>{location}</Text>
            </View>
            <View style={styles.contact}>
              <MailSvg style={styles.contactIcon} />
              <Text>{email}</Text>
            </View>
            <View style={styles.contact}>
              <PhoneSvg style={styles.contactIcon} />
              <Text>{phoneNumber}</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainSection}>
          <View style={styles.mainContainer}>
            <Text style={styles.profileTitle}>Profile</Text>
            <Text style={styles.profileText}>{about}</Text>
            <View style={styles.divider} />
            <View style={styles.mainContent}>
              <View style={styles.mainContentSmallColumn}>
                <Text style={styles.contentTitle}>Education</Text>
                {educations.map((education) => (
                  <View key={education.id} style={styles.mainContentSection}>
                    <Text style={styles.contentHint}>
                      {prettyRange(education.startDate, education.endDate)}
                    </Text>
                    <Text style={styles.educationDegree}>
                      {education.degree} in {education.areaOfStudy}
                    </Text>
                    <Text style={styles.contentHint}>{education.school}</Text>
                  </View>
                ))}
                <Text style={styles.contentTitle}>Skills</Text>
                <View style={styles.mainContentSection}>
                  {skills.map((skill) => {
                    const percentage = calculatePercentage(
                      skills,
                      'yearsOfExperience',
                      skill
                    )

                    return (
                      <View key={skill.id} style={styles.skill}>
                        <Text style={styles.skillLabel}>{skill.title}</Text>
                        <View style={styles.skillProgress}>
                          <View
                            style={{
                              ...styles.skillProgressInner,
                              width: `${percentage}%`,
                            }}
                          />
                        </View>
                      </View>
                    )
                  })}
                </View>
                <Text style={styles.contentTitle}>Publications</Text>
                <View style={styles.mainContentSection}>
                  {sortByDate(publications).map((publication) => (
                    <View key={publication.id} style={styles.media}>
                      <View style={styles.listStyleDisc} />
                      <Text style={styles.mediaText}>
                        <Link src={publication.link} style={styles.mediaLink}>
                          {publication.title}
                        </Link>
                        .
                      </Text>
                    </View>
                  ))}
                </View>
                <Text style={styles.contentTitle}>Conferences</Text>
                <View style={styles.mainContentSection}>
                  {sortByDate(conferences).map((conference) => (
                    <View key={conference.id} style={styles.media}>
                      <View style={styles.listStyleDisc} />
                      <View style={styles.mediaText}>
                        <Text>{conference.topic}</Text>
                        <Text style={styles.contentHint}>
                          {conference.title}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.mainContentLargeColumn}>
                <Text style={styles.contentTitle}>Experience</Text>
                <View style={styles.experienceLine} />
                {experiences.map((experience) => (
                  <View key={experience.id} style={styles.mainContentSection}>
                    <View style={styles.experienceIcon}>
                      <View style={styles.experienceIconInner} />
                    </View>
                    <Text style={styles.contentHint}>
                      {prettyRange(experience.startDate, experience.endDate)}
                    </Text>
                    <Text style={styles.experiencePosition}>
                      {experience.position}
                    </Text>
                    <Text style={styles.contentHint}>{experience.company}</Text>
                    <Html
                      style={styles.experienceDescription}
                      stylesheet={{
                        ul: {
                          margin: '5px 0 0 -20px',
                        },
                        div: {
                          margin: 0,
                        },
                        p: {
                          margin: 0,
                        },
                      }}
                    >
                      {experience.description.html}
                    </Html>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  ) : null
}

export default Resume
