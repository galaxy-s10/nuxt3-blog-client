<template>
  <div class="footer-wrap">
    <p>
      <span>博客已运行</span>
      <span>{{ runningTime ? runningTime : '正在加载...' }}</span>
      <span class="ani">(='◡'=)☆</span>
    </p>
    <p class="fixed-powered">
      <span class="txt">Powered by</span>
      <span
        class="author"
        @click="jumpToUrl"
      >
        galaxy-s10
      </span>
    </p>
    <a
      href="http://beian.miit.gov.cn"
      target="__blank"
      class="beianhao"
    >
      粤ICP备19114467号-2
    </a>
  </div>
</template>

<script setup>
import dayjs, { extend } from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { GITHUB_REPO } from '~/constant';

const runningTime = ref();

function jumpToUrl() {
  window.open(GITHUB_REPO);
}
function handleRunningTime() {
  const startDate = +new Date('2019/09/01 00:00:00');
  const nowDate = +new Date();
  const res = dayjs
    .duration(nowDate - startDate)
    .format('Y年M个月D天HH小时mm分ss秒');
  runningTime.value = res;
}

onMounted(() => {
  extend(duration);
  handleRunningTime();
  setInterval(() => {
    handleRunningTime();
  }, 1000);
});
</script>

<style lang="scss" scoped>
@keyframes run {
  0% {
    transform: rotate(15deg);
  }
  25% {
    transform: translateY(4px);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: translateY(-4px);
  }
  100% {
    transform: rotate(15deg);
  }
}
.footer-wrap {
  padding: 20px;
  text-align: center;
  font-size: 14px;
  .fixed-powered {
    width: 100%;
    border-radius: 10px;
    text-align: center;

    user-select: none;
    .author {
      font-weight: bold;
      cursor: pointer;
    }
  }
  .beianhao {
    color: $theme-color5;
    text-decoration: none;
  }
  .ani {
    margin-left: 5px;
    display: inline-block;
    animation: run 2s infinite linear;
  }
}
</style>
