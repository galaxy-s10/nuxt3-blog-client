import { fetchArticleList } from '~/api/article';
import { useAppStore } from '~/stores/app';
export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.server) {
    // @ts-ignore
    const appStore = useAppStore(nuxtApp.$pinia);
    let res = await fetchArticleList({});
    console.log(res, '===');
    appStore.setArticle(res.data);
  }
});
