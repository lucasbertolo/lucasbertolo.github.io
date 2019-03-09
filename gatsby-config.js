module.exports = {
  siteMetadata: {
    title: "Lucas Bertolo - Resume",
    author: "Lucas Bertolo",
    description: "My portfolio as a webdeveloper"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Lucas Bertolo - Resume',
        short_name: 'Resume',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
