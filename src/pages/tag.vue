<template>
  <div class="tag-wrap">
    <h1 class="title">标签（{{ asyncData.data.value?.tagList.total }}）</h1>
    <hr class="hr-class" />
    <div v-if="asyncData.data.value?.tagList.rows">
      <div class="tag-list">
        <div
          v-for="item in asyncData.data.value?.tagList.rows"
          :key="'tag-key-' + item.id"
          class="tag-item"
          :class="{ 'active-tag': Number($route.params.id) === item.id }"
          @click="getTagArticle(item)"
        >
          <span>{{ item.name }}</span>
          <span class="article-total">({{ item.article_total }})</span>
        </div>
      </div>
    </div>
    <div
      v-else
      class="no-data"
    >
      暂无标签~
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script lang="ts" setup>
import { fetchTagList } from '~/api/tag';
import { ITag } from '~/interface';

const currentTag = ref<ITag>();
const router = useRouter();

function getTagArticle(item: ITag) {
  router.push({ params: { id: item.id } });
}

const asyncData = await useAsyncData(async () => {
  const res = await fetchTagList({
    orderName: 'created_at',
    orderBy: 'desc',
  });
  return { tagList: res.data };
});
</script>

<style lang="scss" scoped>
.tag-wrap {
  padding: 30px;
  .title {
    display: block;
    text-align: center;
  }
  .no-data {
    padding: 20px 0;
    text-align: center;
  }
  .tag-list {
    overflow-y: scroll;
    margin-bottom: 10px;
    height: 180px;
    .tag-item {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 10px 14px;
      padding: 0 10px;
      height: 30px;
      border: 1px solid rgba(93, 121, 148, 0.15);
      border-radius: 3px;
      background-color: white;

      &:hover {
        cursor: pointer;
      }
      &::after {
        position: absolute;
        top: 50%;
        left: -1px;
        width: 8px;
        height: 8px;
        border-width: 0 0 1px 1px;
        border-style: solid;
        border-color: inherit;
        background-color: inherit;
        content: '';
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
      }
      .article-total {
        margin-left: 6px;
      }
      &.active-tag {
        border: 1px solid #005cc5 !important;
      }
    }
  }
  .desc {
    text-align: right;
  }
}
</style>
