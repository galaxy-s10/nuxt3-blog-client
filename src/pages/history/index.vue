<template>
  <div class="history-wrap">
    <h1 class="title">归档（{{ asyncData.data.value?.articleList.total }}）</h1>
    <hr class="hr-class" />
    <n-timeline>
      <n-timeline-item
        v-for="item in asyncData.data.value?.articleList.rows"
        type="info"
        :title="item.title"
        :time="item.created_at"
      />
    </n-timeline>
    <div class="paging">
      <n-pagination
        v-model:page="nowPage"
        :page-count="pageCount"
        @change="changeNowpage"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fetchArticleList } from '~/api/article';

const nowPage = ref(1);
const pageCount = ref(1);
const query = reactive({
  nowPage: 1,
  pageSize: 20,
});
async function changeNowpage(nowPage) {
  query.nowPage = nowPage;
  asyncData.refresh();
}

const asyncData = await useAsyncData(async () => {
  const res = await fetchArticleList({
    orderName: 'created_at',
    orderBy: 'desc',
    ...query,
  });
  return { articleList: res.data };
});

onMounted(() => {
  if (asyncData.data.value) {
    nowPage.value = asyncData.data.value.articleList.nowPage;
    pageCount.value = Math.ceil(
      asyncData.data.value.articleList.total /
        asyncData.data.value.articleList.pageSize
    );
  }
});
</script>

<style lang="scss" scoped>
.history-wrap {
  padding: 30px;
  .title {
    display: block;
    text-align: center;
  }
  .paging {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
