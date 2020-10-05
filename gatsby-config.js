module.exports = {
  siteMetadata: {
    title: `Statically`,
    siteUrl: `https://statically.io`,
    description: `Tools for optimizing your web projects.`,
    author: `@staticallyio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `policies`,
        path: `${__dirname}/policies/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `statically-web`,
        short_name: `statically`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e53e3e`,
        display: `minimal-ui`,
        icon: `static/images/branding/statically-mark.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`),
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-matomo`,
      options: {
        siteId: `1`,
        matomoUrl: `https://pixel.statically.io`,
        siteUrl: `https://statically.io`,
        matomoPhpScript: `view`,
        matomoJsScript: `script.js`,
        disableCookies: true,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-generator`,
  ],
};
