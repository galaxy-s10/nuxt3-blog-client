import { defineStore } from 'pinia';
import { ILiveRoom } from '~/billd-live-interface';
import { LiveLineEnum } from '~/enum';
import { IType } from '~/interface';

interface AppRootState {
  liveLine: LiveLineEnum;
  play: boolean;
  isMobile: boolean;
  clientWidth: number;
  scrollTop: number;
  liveRoomInfo?: ILiveRoom;
  typeList: IType[];
}

export const useAppStore = defineStore('app', {
  state: (): AppRootState => {
    return {
      play: false,
      isMobile: false,
      clientWidth: 750,
      scrollTop: 0,
      typeList: [],
      liveLine: LiveLineEnum.hls,
      liveRoomInfo: undefined,
    };
  },

  actions: {
    setLiveLine(res: AppRootState['liveLine']) {
      this.liveLine = res;
    },
    setPlay(res: AppRootState['play']) {
      this.play = res;
    },
    setLiveRoomInfo(res: AppRootState['liveRoomInfo']) {
      this.liveRoomInfo = res;
    },
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
