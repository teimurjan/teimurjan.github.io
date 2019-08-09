require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  GOOGLE_TAG_MANAGER_ID: process.env.GATSBY_GOOGLE_TAG_MANAGER_ID,
}
