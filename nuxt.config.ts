// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  app: {
    head: {
      title: '旅学中文',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Learn chinese on tour'
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'keywords',
          content: 'chinese, tour, learn chinese, hangzhou tour, online course, offline course'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        // 百度统计
        {
          type: 'text/javascript',
          src: 'https://hm.baidu.com/hm.js?a98e2932a83d9ee1d41ae913f596b377'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light'
  },

  ui: {
    icons: ['mdi', 'heroicons', 'carbon', 'twemoji'],
  },

  i18n: {
    strategy: 'no_prefix',
    locales: ["en", "zh", "fr", "es"], //配置语种
    defaultLocale: 'en', // 默认语种
    vueI18n: './i18n.config.ts', // 通过vueI18n配置
  },

  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],

  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "dayjs-nuxt",
    "@vee-validate/nuxt",
    "@nuxt/ui",
    "@nuxt/content",
    '@nuxtjs/tailwindcss',
    "@nuxtjs/sitemap",
    '@nuxtjs/robots',
  ]
})
