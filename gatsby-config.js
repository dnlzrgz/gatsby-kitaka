module.exports = {
  siteMetadata: {
    title: "Kitaka",
    description: "A good way to start a new Gatsby project.",
    hero: {
      doodle: "SprintingDoodle",
    },
    home: {
      sections: {
        align: "",
      },
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-optimize-svgs",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
