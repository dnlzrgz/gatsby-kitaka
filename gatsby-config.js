const siteMetadata = {
  title: 'Kitaka',
  description: 'A good way to start a new Gatsby project.',
  author: 'Danielkvist',
  keywords: ['gatsby', 'starter'],
  siteUrl: process.env.SITE_URL,
  copy:
    '© Daniel (<a href="https://dkvist.com">Danielkvist</a>) 2020. Made with <a href="https://gatsbyjs.org">Gatsby</a> and love, a lot of love.',
  pages: {
    home: {
      contactForm: {
        action: '',
        method: '',
        netlify: false,
        fields: {
          nameLabel: 'Your Name',
          emailLabel: 'Your Email',
          messageLabel: 'Your Message',
          messageLimit: 750,
          button: 'Send!',
        },
      },
    },
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
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  'gatsby-plugin-sass',
  {
    resolve: 'gatsby-plugin-purgecss',
    options: {
      printRejected: true,
      // develop: true,
    },
  },
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
