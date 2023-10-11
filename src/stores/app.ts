import { defineStore } from 'pinia';
import { IType } from '~/interface';

interface RootState {
  isMobile: boolean;
  clientWidth: number;
  scrollTop: number;
  typeList: IType[];
}

export const useAppStore = defineStore('app', {
  state: (): RootState => {
    return {
      isMobile: false,
      clientWidth: 750,
      scrollTop: 0,
      typeList: [],
    };
  },

  actions: {
    setTypeList(val) {
      this.typeList = val;
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
