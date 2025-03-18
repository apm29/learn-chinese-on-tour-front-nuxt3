// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 禁用开发工具
  devtools: { enabled: false },
  
  // Cloudflare Pages 特定配置
  nitro: {
    // 静态生成配置
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    // 服务端配置
    routeRules: {
      '/java/**': {
        proxy: 'https://lcot-hangzhou.com/java/**',
      }
    }
  },

  // 站点配置
  site: {
    url: 'https://learn-chinese-on-tour-front-nuxt3.pages.dev',
  },

  // 应用配置
  app: {
    head: {
      title: '旅学中文',
      meta: [
        { charset: 'utf-8' },
        { name: "baidu-site-verification", content: "codeva-lMY1gq29em" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Learn chinese on tour'
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'keywords',
          content: 'chinese, tour, learn chinese, hangzhou tour, online course, offline course, hangzhou learn chinese, hangzhou, foreigners learn chinese, Chinese-English bilingual tour'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'https://hm.baidu.com/hm.js?a98e2932a83d9ee1d41ae913f596b377'
        }
      ]
    }
  },

  // 样式配置
  css: ['~/assets/css/main.css'],

  // 颜色模式配置
  colorMode: {
    preference: 'light'
  },

  // UI 配置
  ui: {
    icons: ['mdi', 'heroicons', 'carbon', 'twemoji', 'simple-icons'],
  },

  // 国际化配置
  i18n: {
    strategy: 'no_prefix',
    locales: ["en", "zh", "fr", "es"],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },

  // 组件配置
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],

  // 模块配置
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "dayjs-nuxt",
    "@vee-validate/nuxt",
    "@nuxt/ui",
    "@nuxt/content",
    '@nuxtjs/tailwindcss',
    "@nuxtjs/sitemap",
    '@nuxtjs/seo',
    'nuxt-anchorscroll',
    'nuxt-aos',
  ],

  // 构建优化配置
  build: {
    transpile: ['@nuxtjs/i18n'],
  },

  // 运行时配置
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'https://lcot-hangzhou.com'
    }
  }
}) 
