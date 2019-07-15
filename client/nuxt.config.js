import Sass from 'sass'

const customSass = {
  implementation: Sass
}

export default {
  mode: 'universal',
  head: {
    title: 'Sam Garson',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    'modern-normalize/modern-normalize.css',
    '@/assets/base.scss'
  ],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-purgecss'
  ],
  build: {
    loaders: {
      scss: customSass
    }
  },
  styleResources: {
    scss: ['@/assets/vars.scss']
  },
  purgeCSS: {
    enabled: ({ isDev, isClient }) => (!isDev && isClient)
  }
}
