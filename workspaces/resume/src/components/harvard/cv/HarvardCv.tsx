import { Document, Font, Page, Text, View } from '@react-pdf/renderer'
import Html from 'react-pdf-html'
import Header from '../header'
import ResumeItem from '../resume-item'
import sharedStyles from '../styles'
import styles, { cvBulletStylesheet, cvHtmlStylesheet } from '../styles/layout'
import { parseContacts } from './contacts'
import { inlineHtml, listHtml, paragraphsHtml } from './markdown'
import type { CvDocument, CvSection } from './types'

Font.registerHyphenationCallback((word: string) => [word])

const Bullets = ({ items }: { items: string[] }) => (
  <View style={{ marginTop: 2 }}>
    {items.map((item, index) => (
      <View key={index} wrap={false}>
        <Html stylesheet={cvBulletStylesheet}>{listHtml([item])}</Html>
      </View>
    ))}
  </View>
)

const Section = ({ section }: { section: CvSection }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle} minPresenceAhead={36}>
      {section.title}
    </Text>
    {section.kind === 'entries' &&
      section.entries.map((entry, index) => (
        <View
          key={index}
          style={
            index + 1 < section.entries.length ? sharedStyles.itemMarginBottomSmall : undefined
          }
        >
          <View wrap={false} minPresenceAhead={24}>
            <ResumeItem
              title={entry.title}
              subtitle={entry.subtitle || undefined}
              dates={entry.dates || undefined}
              note={entry.note ? inlineHtml(entry.note) : undefined}
              stylesheet={cvHtmlStylesheet}
              style={{ marginBottom: 0 }}
            />
          </View>
          <Bullets items={entry.bullets} />
        </View>
      ))}
    {section.kind === 'bullets' && <Bullets items={section.items} />}
    {section.kind === 'lines' && (
      <Html stylesheet={cvHtmlStylesheet}>{paragraphsHtml(section.items)}</Html>
    )}
  </View>
)

const HarvardCv = ({ cv }: { cv: CvDocument }) => (
  <Document title={`${cv.name} CV`} author={cv.name}>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <Header title={cv.name} headline={cv.headline} contacts={parseContacts(cv.contact)} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.aboutText}>{cv.summary}</Text>
        </View>
        {cv.sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}
      </View>
    </Page>
  </Document>
)

export default HarvardCv
