module.exports = {
  apps: [
    {
      name: 'nuxt3-blog-client-null-3400',
      exec_mode: 'cluster', // cluster,fork
      instances: '3',
      port: 3400,
      // cwd: `/Users/huangshuisheng/Desktop/hss/galaxy-s10/nuxt-blog-client`,
      // cwd: `${process.cwd()}`,
      script: './.output/server/index.mjs',
      // watch: false,
      env: {
        BASE_ENV: 'prod',
      },
    },
  ],
};
