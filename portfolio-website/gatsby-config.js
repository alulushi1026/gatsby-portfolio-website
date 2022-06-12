module.exports = {
  pathPrefix: 'eternalautumn.eth',
  siteMetadata: {
    name: `Anna Lulushi, Portfolio`,
    tagline: `Portfolio Website of Anna Lulushi`
  },
  plugins: [
    {
        resolve: 'gatsby-plugin-react-svg',
        options: {
            rule: {
              include: `${__dirname}/src/assets/vectors`
            }
        }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`
  ],
}
