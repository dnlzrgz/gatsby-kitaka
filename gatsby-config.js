const siteMetadata = {
  title: 'Kitaka',
  description: 'A good way to start a new Gatsby project.',
  copy:
    '© Daniel (Danielkvist) 2020. Made with Gatsby and love, a lot of love.',
  pages: {
    notFound: {
      msg: '404',
    },
  },
  social: [
    {
      name: 'Twitter',
      url: '#',
    },
    {
      name: 'Facebook',
      url: '#',
    },
    {
      name: 'Instagram',
      url: '#',
    },
  ],
};

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_TRACKING_ID,
    },
  },
  'gatsby-plugin-sass',
  'gatsby-plugin-optimize-svgs',
  'gatsby-transformer-remark',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/content/`,
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Kitaka',
      short_name: 'Kitaka',
      start_url: '/',
      background_color: '#eff1f3',
      theme_color: '#009fb7',
      display: 'standalone',
    },
  },
  'gatsby-plugin-offline',
];

module.exports = {
  siteMetadata,
  plugins,
};
