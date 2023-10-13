import BilldHtmlWebpackPlugin from 'billd-html-webpack-plugin';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

const buildDir = 'nuxt-build'; // 不要使用dist作为构建目录，否则又会有之前的standard-version问题（拼接路径错误），导致一些ts提示出错
const env =
  process.env.LD_NUXT_APP_RELEASE_PROJECT_ENV === 'prod' ? 'prod' : 'beta';
const baseURL = env === 'prod' ? '/' : '/beta/';
const port = env === 'prod' ? 3400 : 3400;
const outDir = env === 'prod' ? 'prod' : 'beta';
const cdnPath = `https://resource.hsslive.cn/${outDir}/public`;

console.log('当前环境', env);
console.log('当前端口', port);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  imports: {
    dirs: ['stores', 'utils/localStorage'],
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
        scss: { additionalData: '@import "~/assets/styles/global.scss";' },
      },
    },
    // https://www.naiveui.com/zh-CN/os-theme/docs/ssr
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone']
          : [],
    },
  },
  alias: {
    // '~': fileURLToPath(new URL('./src', import.meta.url)),
    // '@': fileURLToPath(new URL('./src', import.meta.url)),
    // utils: fileURLToPath(new URL('./src', import.meta.url)),
  },
  // scss: { additionalData: '@use "~/assets/styles/global.scss";' },
  css: ['~/assets/styles/normalize.css'],
  buildDir,
  // https://www.naiveui.com/zh-CN/os-theme/docs/ssr
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer',
          ]
        : ['@juggle/resize-observer'],
  },
  devServer: {
    port,
  },
  modules: ['@nuxt/image', '@pinia/nuxt'],
  srcDir: 'src/',
  image: {
    ipx: {
      // 不管正式还是测试环境，nuxt-img都使用/_ipx/前缀
      // https://github.com/nuxt/image/issues/665
      // @ts-ignore
      baseURL: `/_ipx/`, // <= Add this config
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: env === 'prod' ? cdnPath + '/favicon.ico' : '/favicon.ico',
        },
      ],
    },
    baseURL,
    cdnURL: cdnPath,
  },
});
