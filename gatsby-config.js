module.exports = {
  siteMetadata: {
    title: `Zero Forest`,
    lang: `ja`,
    locale: `ja_JP`,
    author: {
      name: `Emi`,
      summary: `マイペースにWebサイトやWebアプリの制作をしています`,
    },
    description: `制作物を公開したり、Web技術について発信しています`,
    siteUrl: `https://0forest.com`,
    social: {
      twitter: `@EmiMoment`,
      github: `emmieworks`,
      pinterest: `0forest`,
    },
    categories: [
      {
        name: `Programming`,
        slug: `pgm`,
        image: `cat_pgm.png`,
      },
      {
        name: `Design`,
        slug: `design`,
        image: `cat_design.png`,
      },
      {
        name: `WordPress`,
        slug: `wordpress`,
        image: `cat_wordpress.png`,
      },
      {
        name: `Lifestyle`,
        slug: `lifestyle`,
        image: `cat_lifestyle.png`,
      },
    ],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: 0,
              icon: false,
              maintainCase: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal:false,
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93099941-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zero Forest`,
        short_name: `ZeroForest`,
        start_url: `/`,
        background_color: `#fffcf5`,
        theme_color: `#91C294`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
