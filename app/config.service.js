process.env.FUNCTION_NAME = 'samtgarson_static_build'

// eslint-disable-next-line import/no-extraneous-dependencies
const chromium = require('chrome-aws-lambda')
const { resolve } = require('path')
const { writeFileSync } = require('fs')

module.exports = (api, options) => {
  api.registerCommand('config', async () => {
    const executablePath = await chromium.executablePath
    console.log({ executablePath })
    if (executablePath) {
      options.pluginOptions.prerenderSpa.customRendererConfig = { executablePath }
      const newConfig = `module.exports = ${JSON.stringify(options)}`
      console.log(newConfig)
      writeFileSync(resolve(process.cwd(), 'vue.config.js'), newConfig)
    }
  })
}

module.exports.defaultModes = {
  config: 'production'
}
