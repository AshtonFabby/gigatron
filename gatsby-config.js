module.exports = {
  siteMetadata: {
    siteUrl: "https://www.gigatroneng.com",
    title: "gigatron",
  },

  plugins: [

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/favicon.png',
      },
    },

    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
