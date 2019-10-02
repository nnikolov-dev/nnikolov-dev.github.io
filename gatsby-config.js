module.exports = {
  siteMetadata: {
    title: "nnikolov-dev",
    author: "Nikita Nikolov",
    description: "Nikita Nikolov's personal portfolio",
    attributes: ["software developer", "ai enthusiast", "freelancer"],
    github: "nnikolov-dev",
    linkedIn: "nikita-nikolov-45136618b",
    email: "nn00317@surrey.ac.uk",
    contact: ["University of Surrey", "United Kingdom"]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
