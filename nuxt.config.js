export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'compass-test-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/apollo',
    '@nuxtjs/google-fonts',
    '@nuxtjs/style-resources',
    '@nuxtjs/moment',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/apollo',
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      '@vue/apollo-composable',
    ]
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  googleFonts: {
    families: {
      Roboto: true,
      Nunito: true,
      Lato: [100, 300],
    }
  },

  styleResources: {
    scss: [
      '~assets/scss/layout.scss',
      '~assets/scss/fonts.scss',
      '~assets/scss/mixins.scss',
      '~assets/scss/spaces.scss'
    ]
  },
 

  moment: {
    timezone: {
      startYear: 2000,
      endYear: 2030
    }
  },

  env: {
    nuxtApiUrl: process.env.NUXT_API_URL
    // the variable from the .env file, which must be in the root of the project
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://us-central1-challenge-334613.cloudfunctions.net/api/graphql'
      }
    }
  },
}
