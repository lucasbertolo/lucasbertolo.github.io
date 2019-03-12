const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/lucasbertolo/Desktop/projects/lucasbertolo/portfolio-lucas/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/lucasbertolo/Desktop/projects/lucasbertolo/portfolio-lucas/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/lucasbertolo/Desktop/projects/lucasbertolo/portfolio-lucas/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/lucasbertolo/Desktop/projects/lucasbertolo/portfolio-lucas/src/pages/page-2.js")))
}

