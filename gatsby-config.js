module.exports = {
  siteMetadata: {
    siteTitle: 'Daeng Muhammad Feisal - Product Designer',
    siteDescription: 'Web of Daeng Muhammad Feisal',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://dae.ng/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Daeng Muhammad Feisal', // for example - 'Ivan Ganev'
    authorDescription: 'Product Designer', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `linkedin`,
        url: `https://linkedin.com/in/daengdoang`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/daengdoang`
      },
      {
        icon: `github`,
        url: `https://github.com/daengdoang`
      },
      {
        icon: `behance`,
        url: `https://behance.net/daengdoang`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
