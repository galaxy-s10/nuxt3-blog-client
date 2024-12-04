<template>
  <div class="about-wrap">
    <h1 class="title">互动</h1>
    <hr class="hr-class" />
    <RenderMarkdown
      :md="asyncData.data.value?.frontendDetail[FrontendKeyEnum.about_me].value"
    ></RenderMarkdown>
  </div>
</template>

<script lang="ts" setup>
import { fetchFrontendDetail } from '~/api/frontend';
import { FrontendKeyEnum } from '~/enum';

const asyncData = await useAsyncData(async () => {
  const res = await fetchFrontendDetail();
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
