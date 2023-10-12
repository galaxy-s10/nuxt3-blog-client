import VueLazyLoad from 'vue-lazyload';
import { getImg } from '~/constant';

export default defineNuxtPlugin(function (nuxtApp) {
  const flag = '_is_use_vue_lazyload';
  // @ts-ignore
  if (nuxtApp.vueApp[flag]) {
    return;
  }

  nuxtApp.vueApp.use(VueLazyLoad, {
    preLoad: 1,
    error: getImg(
      import.meta.glob('../assets/images/error_pic.webp', {
        eager: true,
      })
    ),
    loading: getImg(
      import.meta.glob('../assets/images/lazy.png', {
        eager: true,
      })
    ),
    attempt: 2,
  });
  // @ts-ignore
  nuxtApp.vueApp[flag] = true;
});
