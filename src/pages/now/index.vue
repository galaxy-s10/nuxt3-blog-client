<template>
  <div class="live-wrap">
    <h1 class="title">直播</h1>
    <hr class="hr-class" />
    <h2 class="title-desc">
      <span>完整体验：</span>
      <span
        class="link"
        @click="openToTarget(BILLD_LIVE_URL)"
      >
        {{ BILLD_LIVE_URL }}
      </span>
    </h2>
    <div
      ref="widthRef"
      class="width"
    ></div>
    <div
      v-loading="videoLoading"
      class="video-wrap"
      :style="{
        '--width': videoWidth + 'px',
      }"
    >
      <div ref="remoteVideoRef"></div>
      <VideoControls
        :resolution="videoHeight"
        @click.stop
        @refresh="handlePlay"
      ></VideoControls>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { openToTarget } from 'billd-utils';
import { fetchLiveList } from '~/api/live';
import { BILLD_LIVE_URL } from '~/constant';
import { LiveLineEnum } from '~/enum';
import { useFlvPlay, useHlsPlay } from '~/hooks/use-play';
import { videoToCanvas } from '~/utils';

const appStore = useAppStore();
const { hlsVideoEl, startHlsPlay, destroyHls } = useHlsPlay();
const { init, flvVideoEl, startFlvPlay, destroyFlv } = useFlvPlay();

const stopDrawingArr = ref<any[]>([]);
const remoteVideo = ref<HTMLElement[]>([]);
const remoteVideoRef = ref<HTMLElement>();
const widthRef = ref<HTMLElement>();
const videoWidth = ref(0);
const videoHeight = ref();
const videoLoading = ref(true);

async function getLiveRoomList() {
  try {
    const res = await fetchLiveList({
      orderName: 'created_at',
      orderBy: 'desc',
    });
    if (res.code === 200) {
      if (res.data.total) {
        appStore.setLiveRoomInfo(res.data.rows[0].live_room);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

watch(
  () => remoteVideo.value,
  (newVal) => {
    newVal.forEach((item) => {
      remoteVideoRef.value?.appendChild(item);
    });
  },
  {
    deep: true,
  }
);

async function handleStopDrawing() {
  stopDrawingArr.value = [];
  stopDrawingArr.value.forEach((cb) => cb());
  remoteVideo.value.forEach((el) => el.remove());
  remoteVideo.value = [];
  destroyFlv();
  destroyHls();
}

async function handlePlay() {
  videoLoading.value = true;
  handleStopDrawing();
  switch (appStore.liveLine) {
    case LiveLineEnum.flv:
      await init();
      startFlvPlay({ flvurl: appStore.liveRoomInfo!.flv_url! });
      break;
    case LiveLineEnum.hls:
      startHlsPlay({ hlsurl: appStore.liveRoomInfo!.hls_url! });
      break;
    case LiveLineEnum.rtc:
      break;
  }
}

watch(
  () => appStore.liveLine,
  async () => {
    handlePlay();
  }
);

watch(
  () => flvVideoEl.value,
  () => {
    stopDrawingArr.value = [];
    stopDrawingArr.value.forEach((cb) => cb());
    const { canvas, stopDrawing } = videoToCanvas({
      videoEl: flvVideoEl.value!,
      resize: ({ w, h }) => {
        videoHeight.value = `${w}x${h}`;
      },
    });
    stopDrawingArr.value.push(stopDrawing);
    remoteVideo.value.push(canvas);
    videoLoading.value = false;
  }
);

watch(hlsVideoEl, () => {
  stopDrawingArr.value = [];
  stopDrawingArr.value.forEach((cb) => cb());
  const { canvas, stopDrawing } = videoToCanvas({
    videoEl: hlsVideoEl.value!,
    resize: ({ w, h }) => {
      videoHeight.value = `${w}x${h}`;
    },
  });
  stopDrawingArr.value.push(stopDrawing);
  remoteVideo.value.push(canvas);
  videoLoading.value = false;
});

onUnmounted(() => {
  destroyHls();
});

onMounted(async () => {
  videoWidth.value = widthRef.value?.getBoundingClientRect().width || 0;
  await getLiveRoomList();
  appStore.setPlay(true);
  startHlsPlay({
    hlsurl: appStore.liveRoomInfo!.hls_url!,
  });
});
</script>

<style lang="scss" scoped>
.live-wrap {
  padding: 30px;
  .title {
    display: block;
    text-align: center;
  }
  .title-desc {
    text-align: center;
    .link {
      color: $theme-color1;
      cursor: pointer;
    }
  }
  .width {
    width: 100%;
  }
  .video-wrap {
    position: relative;
    height: calc(var(--width) / $video-ratio);
    :deep(canvas) {
      position: absolute;
      width: 100%;
      height: 100%;

      @extend %fullMixin;
    }
    :deep(video) {
      position: absolute;
      width: 100%;
      height: 100%;

      @extend %fullMixin;
    }
  }
}
</style>
