// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // not work while in ssr mode
  nitro: {
    devProxy: {
      '/java': {
        target: 'https://next.lcot-hangzhou.com',
        changeOrigin: true
      }
    },
    // 该配置用于服务端请求转发
    routeRules: {
      '/java/**': {
        proxy: 'https://next.lcot-hangzhou.com/java/**',
      }
    }
  },
  // work in client
  vite: {
    server: {
      proxy: {
        '/java': {
          target: 'https://next.lcot-hangzhou.com',
          changeOrigin: true
        }
      }
    }
  },
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // 默认值
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // 默认值
    },
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

  anchorscroll: {
    hooks: [
      // Or any valid hook if needed
      // Default is `page:finish`
      'page:transition:finish',
    ],
  },

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },

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
    'nuxt-anchorscroll',
    'nuxt-aos',
  ],


})
