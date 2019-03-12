module.exports = {
  siteMetadata: {
    title: "Lucas Bertolo - Portfolio",
    author: "Lucas Bertolo",
    description: "Portfolio de desenvolvedor web",
    siteUrl: "https://lucasbertolo.github.io/"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Lucas Bertolo - Portfolio',
        short_name: 'Portfolio',
        start_url: 'https://lucasbertolo.github.io/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap'
  ],
}
