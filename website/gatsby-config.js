/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  assetPrefix: '/home',
  siteMetadata: {
    title: `Bartłomiej Klocek`,
    description: `Bartłomiej Klocek - A Software Engineer`,
    author: `Bartłomiej Klocek`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    // Temporarily disabled
    // Apache mod_rewrite, assetPrefix and this plugin
    // do not work well together
    //'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
};
