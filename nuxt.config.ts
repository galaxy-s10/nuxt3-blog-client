import BilldHtmlWebpackPlugin from 'billd-html-webpack-plugin';

import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

const buildDir = 'nuxt-build'; // 不要使用dist作为构建目录，否则又会有之前的standard-version问题（拼接路径错误），导致一些ts提示出错
const env = 'prod';
const baseURL = '/';
const port = 3400;
const cdnPath = `https://tencentcos-res.hsslive.cn/nuxt3-blog-client/public`;

console.log('当前环境', env);
console.log('当前端口', port);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  imports: {
    dirs: ['stores', 'utils/localStorage'],
  },
  // 使用了nuxt-multi-cache，multiCache必须要写
  multiCache: {
    route: {
      enabled: true,
    },
  },
  vite: {
    plugins: [
      // @ts-ignore
      new BilldHtmlWebpackPlugin({
        env: 'nuxt3-6',
        log: {
          pkgRepository: env !== 'prod',
          commitSubject: env !== 'prod',
        },
      }).config,
      AutoImport({
        imports: [
          'vue',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "billd-scss/src/index.scss" as *;@import "~/assets/styles/global.scss";',
        },
      },
    },
    // https://www.naiveui.com/zh-CN/os-theme/docs/ssr
    // optimizeDeps: {
    //   include:
    //     process.env.NODE_ENV === 'development'
    //       ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone']
    //       : [],
    // },
  },
  alias: {
    // '~': fileURLToPath(new URL('./src', import.meta.url)),
    // '@': fileURLToPath(new URL('./src', import.meta.url)),
    // utils: fileURLToPath(new URL('./src', import.meta.url)),
  },
  // scss: { additionalData: '@use "~/assets/styles/global.scss";' },
  // scss: ['~/assets/styles/billd-scss.scss'],
  css: ['~/assets/styles/normalize.css'],
  buildDir,
  // https://www.naiveui.com/zh-CN/os-theme/docs/ssr
  build: {
    // https://github.com/tusen-ai/naive-ui/issues/6564
    transpile: ['vueuc'],
    // transpile:
    //   process.env.NODE_ENV === 'production'
    //     ? [
    //         'naive-ui',
    //         'vueuc',
    //         '@css-render/vue3-ssr',
    //         '@juggle/resize-observer',
    //       ]
    //     : ['@juggle/resize-observer'],
  },
  devServer: {
    port,
    host: '0.0.0.0',
  },
  modules: [
    'nuxt-multi-cache',
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxtjs-naive-ui',
  ],
  srcDir: 'src/',
  image: {
    ipx: {
      // 不管正式还是测试环境，nuxt-img都使用/_ipx/前缀
      // https://github.com/nuxt/image/issues/665
      // @ts-ignore
      baseURL: '/_ipx/', // <= Add this config
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: env === 'prod' ? `${cdnPath}/favicon.ico` : '/favicon.ico',
        },
      ],
    },
    baseURL,
    cdnURL: cdnPath,
  },
});
