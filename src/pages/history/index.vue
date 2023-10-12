<template>
  <div class="history-wrap">
    <h1 class="title">文章归档</h1>
    <hr class="hr-class" />
    <n-timeline>
      <n-timeline-item type="info">
        <template #header>
          <div class="n-title">
            {{ `目前一共${asyncData.data.value?.articleList.total}篇文章` }}
          </div>
        </template>
      </n-timeline-item>
      <n-timeline-item
        v-for="item in asyncData.data.value?.articleList.rows"
        type="info"
        :title="item.title"
        :time="item.created_at"
      />
    </n-timeline>
  </div>
</template>

<script lang="ts" setup>
import { fetchArticleList } from '~/api/article';

const asyncData = await useAsyncData(async () => {
  const query = {
    nowPage: 1,
    pageSize: 20,
  };
  let res = await fetchArticleList({
    orderName: 'created_at',
    orderBy: 'desc',
    ...query,
  });
  return { articleList: res.data, query };
});
</script>

<style lang="scss" scoped>
.history-wrap {
  padding: 30px;
  .title {
    display: block;
    text-align: center;
  }
  .n-title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
