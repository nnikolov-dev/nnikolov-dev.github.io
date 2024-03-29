module.exports = {
  siteMetadata: {
    title: "nnikolov-dev",
    author: "Nikita Nikolov",
    description: "Nikita Nikolov's personal portfolio"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'nnikolov-dev portfolio',
        short_name: 'nnikolov-dev',
        start_url: '/',
        background_color: '#1B3158',
        theme_color: '#1B3158',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
