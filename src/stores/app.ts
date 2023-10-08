import { defineStore } from 'pinia';

interface RootState {
  isMobile: boolean;
  clientWidth: number;
  scrollTop: number;
}

export const useAppStore = defineStore('app', {
  state: (): RootState => {
    return {
      isMobile: false,
      clientWidth: 750,
      scrollTop: 0,
    };
  },

  actions: {
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
