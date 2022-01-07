module.exports = {
  siteMetadata: {
    siteUrl: "https://www.cannon.skule.ca",
    title: "The Cannon",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://cannon-wp.skule.ca/graphql",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
        defaults: {
          placeholder: "blurred"
        }
      },
      __key: "images",
    },
  ],
};
