module.exports = {
  siteMetadata: {
    title: `Flämingo Kollektiv`,
    description: `Flämingo Kollektiv Website`,
    author: `@gonbaum`,
  },
  pathPrefix: `/`,
  /* run a 'gatsby clean' before deploy. pathPrefix: 'flamingo' or just '/' FOR DEPLOY, use '/flamingo' FOR DEV */

  /* For deploying:
  /* 1- Run gatsby clean
  /* 2- yarn run deploy
  /* 3- add fonts folder if it's not added to complete build
  /* 4- once deployed add to root CNAME file with 'flaemingo.de'
  /* 5- if it doesnt work at flaemingo.de but yes at flaemingo.de/index.html, add a file named .nojekyll to the root */

  
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/flamingo-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
