<template>
  <div class="about-wrap">
    <h1 class="title">关于</h1>
    <hr class="hr-class" />
    {{ asyncData.data.value?.frontendDetail }}
  </div>
</template>

<script lang="ts" setup>
import { fetchFrontendDetail } from '~/api/frontend';

const asyncData = await useAsyncData(async () => {
  let res = await fetchFrontendDetail();
  return { frontendDetail: res.data };
});
</script>

<style lang="scss" scoped>
.about-wrap {
  padding: 30px;
  .title {
    display: block;
    text-align: center;
  }
}
</style>
