import serveStatic from 'serve-static'

export default {
  //  server: {
  //    port: 80, // default: 3000
  //     host: '185.51.246.40' // default: localhost
  //   },

  serverMiddleware: [
    '~/middleware/seo.js'
  ],
  publicRuntimeConfig: {
    ws_url: process.env.ws_url,
    img_url: process.env.img_url,
  },
  privateRuntimeConfig: {
  },

  head: {
    title: '二维码-辣妹 - 社交网络约会',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' },
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/main.sass',
  ],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/scroll',
    { src: '@/plugins/swiper', mode: 'client' },
  ],
  components: true,
  buildModules: [
      '@nuxtjs/dotenv',
  ],
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  axios: {
    baseURL:'http://localhost:8000'
    // baseURL:'http://185.51.246.40:8000'
  },
  router: {
    middleware: ['auth']
  },
  build: {
    transpile: [/^element-ui/],
  },
  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/token/login/', method: 'post', propertyName: 'auth_token' },
          logout: { url: '/auth/token/logout/', method: 'post' },
          user: { url: '/api/v1/user/me/', method: 'get', propertyName: false }
        },
        // tokenRequired: true,
        tokenType: 'Token',
        // globalToken: true,
        //autoFetchUser: false
      }
    }
  }
}
