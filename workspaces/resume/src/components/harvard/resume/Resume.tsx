import { Document, Page, Text, View } from '@react-pdf/renderer'
import type { Style } from '@react-pdf/types'
import { YEAR_DATE_FORMAT, dateSorter, prettyRange } from '@teimurjan/utils'
import Header from '../header'
import Recognition from '../recognition'
import ResumeItem from '../resume-item'
import Skills from '../skills'
import sharedStyles from '../styles'
import styles from '../styles/layout'
import type { HarvardResumeProps } from '../types'

const getItemMarginStyle = (style: Style | Style[], index: number, itemsCount: number) =>
  index + 1 === itemsCount ? undefined : style

const HarvardResume = ({
  bios: [{ fullName, about, location, phoneNumber, email }],
  educations,
  skills,
  experiences,
  publications,
  conferences,
  config = { location: false },
}: HarvardResumeProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Header
            title={fullName}
            contacts={[
              { label: email },
              { label: 'in/teimur-gasanov', href: 'https://www.linkedin.com/in/teimur-gasanov' },
              { label: phoneNumber, href: `tel:${phoneNumber}` },
              ...(config?.location && location ? [{ label: location }] : []),
            ]}
          />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.aboutText}>{about}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {experiences
              .sort((a, b) => dateSorter(a.startDate, b.startDate))
              .map((experience, index) => (
                <ResumeItem
                  key={experience.id}
                  title={experience.position}
                  dates={prettyRange(
                    experience.startDate,
                    experience.endDate ?? undefined,
                    YEAR_DATE_FORMAT
                  )}
                  subtitle={experience.company}
                  description={experience.description.html}
                  style={getItemMarginStyle(
                    sharedStyles.itemMarginBottomSmall,
                    index,
                    experiences.length
                  )}
                />
              ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {educations
              .sort((a, b) => dateSorter(a.startDate, b.startDate))
              .map((education, index) => (
                <ResumeItem
                  key={education.id}
                  dates={prettyRange(
                    education.startDate,
                    education.endDate ?? undefined,
                    YEAR_DATE_FORMAT
                  )}
                  title={`${education.degree} in ${education.areaOfStudy}`}
                  subtitle={education.school}
                  style={getItemMarginStyle(
                    sharedStyles.itemMarginBottom,
                    index,
                    educations.length
                  )}
                />
              ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Skills skills={skills} style={sharedStyles.itemMarginBottom} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recognition</Text>
            <Recognition publications={publications} conferences={conferences} />
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default HarvardResume
