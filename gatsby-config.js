module.exports = {
  siteMetadata: {
    title: 'Desenvolvedor Web, portfolio de projetos javascript/react',
    author: 'Lucas Bertolo',
    description:
      'Desenvolvedor Web - Portfolio de projetos Javascript/React de Lucas Bertolo',
    siteUrl: 'https://lucasbertolo.github.io/',
    keywords: [
      'curriculo',
      'resume',
      'portfolio',
      'webdeveloper',
      'react',
      'javascript',
      'web',
      'developer',
      'desenvolvedor',
      'Piracicaba',
      'programador',
      'websites',
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Desenvolvedor Web - Lucas Bertolo',
        short_name: 'Desenvolvedor web',
        start_url: 'https://lucasbertolo.github.io/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logos/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://lucasbertolo.github.io/`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
  ],
};
