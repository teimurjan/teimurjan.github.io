import { StyleSheet } from '@react-pdf/renderer'
import { colord } from 'colord'
import theme from '../../../theme'

const layoutStyles = StyleSheet.create({
  page: {
    backgroundColor: theme.colors.light,
    fontFamily: 'Helvetica',
    color: theme.colors.dark3,
    fontSize: 10,
  },
  container: {
    padding: 24,
  },
  section: {
    marginBottom: 6,
  },
  sectionTitle: {
    color: theme.colors.dark3,
    borderBottom: `1px solid ${colord(theme.colors.dark2).lighten(0.16).toRgbString()}`,
    fontSize: 10,
    textTransform: 'uppercase',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
    textAlign: 'left',
  },
  aboutText: {
    textAlign: 'justify',
    lineHeight: 0.64,
  },
})

/** Stylesheet for the HTML descriptions inside resume items. */
export const htmlStylesheet = {
  ul: {
    margin: '2px 0 0 -20px',
    lineHeight: 0.64,
  },
  li: {
    marginBottom: 2,
    fontSize: 10,
  },
  div: {
    margin: 0,
    marginLeft: -2,
  },
  p: {
    margin: 0,
  },
}

/** CV lines also carry links and stacked plain lines. */
export const cvHtmlStylesheet = {
  ...htmlStylesheet,
  p: {
    margin: 0,
    marginBottom: 2,
    fontSize: 10,
  },
  a: {
    color: theme.colors.dark3,
  },
  b: {
    fontFamily: 'Helvetica-Bold',
  },
}

/** One bullet per list, so a page break never lands inside a bullet. */
export const cvBulletStylesheet = {
  ...cvHtmlStylesheet,
  ul: {
    margin: '0 0 0 -20px',
    lineHeight: 0.64,
  },
}

export default layoutStyles
