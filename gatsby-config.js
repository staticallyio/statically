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
        name: `statically`,
        short_name: `statically`,
        start_url: `/`,
        background_color: `#ffffff`,
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
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: `be7220b7-385d-4a8c-89fb-cfc0048fe0a0`,
        srcUrl: `https://anila.statically.io/script.js`,
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-generator`,
  ],
};
