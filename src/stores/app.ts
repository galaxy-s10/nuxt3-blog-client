import { defineStore } from 'pinia';

interface RootState {
  isMobile: boolean;
  clientWidth: number;
  scrollTop: number;
  article: any;
}

export const useAppStore = defineStore('app', {
  state: (): RootState => {
    return {
      isMobile: false,
      clientWidth: 750,
      scrollTop: 0,
      article: undefined,
    };
  },

  actions: {
    setArticle(val) {
      this.article = val;
    },
    changeIsMobile(val) {
      this.isMobile = val;
    },
    changeClientWidth(val) {
      this.clientWidth = val;
    },
    changeScrollTop(val) {
      this.scrollTop = val;
    },
  },
});
