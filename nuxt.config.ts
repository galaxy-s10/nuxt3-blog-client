import BilldHtmlWebpackPlugin from 'billd-html-webpack-plugin';

const buildDir = 'nuxt-build'; // 不要使用dist作为构建目录，否则又会有之前的standard-version问题（拼接路径错误），导致一些ts提示出错
const env =
  process.env.LD_NUXT_APP_RELEASE_PROJECT_ENV === 'prod' ? 'prod' : 'beta';
const baseURL = env === 'prod' ? '/' : '/gwbeta/';
const port = env === 'prod' ? 7002 : 7001;
const outDir = env === 'prod' ? 'prod' : 'beta';
const cdnPath = `https://resource.hsslive.cn/${outDir}/public`;

console.log('当前环境', env);
console.log('当前端口', port);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    ],
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@import "~/assets/styles/global.scss";' },
      },
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
