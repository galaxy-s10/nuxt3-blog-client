import { fetchTypeList } from '~/api/type';
import { useAppStore } from '~/stores/app';
export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    // @ts-ignore
    const appStore = useAppStore(nuxtApp.$pinia);
    fetchTypeList({})
      .then((res) => {
        appStore.setTypeList(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
