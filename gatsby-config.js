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
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kitaka",
        short_name: "Kitaka",
        start_url: "/",
        background_color: "#eff1f3",
        theme_color: "#009fb7",
        display: "standalone",
      },
    },
  ],
}
