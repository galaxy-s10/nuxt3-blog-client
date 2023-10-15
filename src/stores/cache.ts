import { defineStore } from 'pinia';

export type PiniaCacheRootState = {
  muted: boolean;
  volume: number;
};

export const usePiniaCacheStore = defineStore('pinia-cache', {
  persist: {
    key: 'pinia-cache',
  },
  state: (): PiniaCacheRootState => {
    return {
      muted: true,
      volume: 70,
    };
  },
  actions: {
    setMuted(res: PiniaCacheRootState['muted']) {
      this.muted = res;
    },
    setVolume(res: PiniaCacheRootState['volume']) {
      this.volume = res;
    },
  },
});
