module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        'src/assets/vars.scss'
      ]
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
