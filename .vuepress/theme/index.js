const {resolve} = require('path')

// Theme API.
module.exports = (_options, ctx) => {
  const { themeConfig  } = ctx

  const enableSmoothScroll = themeConfig.smoothScroll === true

  return {
    scss: {
      implementation: require('sass')
    },
    plugins: [
      ['container', {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示'
        }
      }],
      ['container', {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '注意'
        }
      }],
      ['container', {
        type: 'danger',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '警告'
        }
      }],
      ['smooth-scroll', enableSmoothScroll]
    ]
  }
}
