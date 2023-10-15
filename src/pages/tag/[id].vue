<template>
  <div class="tag-article-wrap">
    <article
      v-for="item in asyncData.data.value?.tagArticleList.rows"
      :key="'article-key-' + item.id"
      class="article-item"
    >
      <div class="article-left">
        <nuxt-link
          v-if="item['head_img']"
          v-slot="{ navigate }"
          :to="`/article/${item.id}`"
          custom
        >
          <div
            @click="navigate"
            class="head-img"
            v-lazy:background-image="item.head_img"
          ></div>
        </nuxt-link>
        <nuxt-link
          v-else
          v-slot="{ navigate }"
          :to="`/article/${item.id}`"
          custom
        >
          <div
            class="head-img"
            @click="navigate"
          >
            <NoHeadImg></NoHeadImg>
          </div>
        </nuxt-link>
      </div>

      <div class="article-right">
        <nuxt-link
          :to="'/article/' + item.id"
          class="article-right-txt"
        >
          {{ item.title }}
        </nuxt-link>
        <div class="hr-class"></div>
        <div class="summary">
          <div
            class="user-avatar"
            v-lazy:background-image="item.users[0] && item.users[0].avatar"
          ></div>
          <span class="jgh"></span>
          <span>{{ convertDate(item.created_at) }}</span>
          <span class="jgh"></span>
          <span>{{ item.click }}浏览</span>
          <span class="jgh"></span>
          <span>{{ item.comment_total }}评论</span>
          <span class="jgh"></span>
          <div>{{ item.star_total }}star</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { fetchTagArticleList } from '~/api/tag';
import { convertDate } from '~/utils';

const query = reactive({
  nowPage: 1,
  pageSize: 3,
});

const route = useRoute();
const tagId = ref(Number(route.params.id));

const asyncData = await useAsyncData(async () => {
  let res = await fetchTagArticleList({ tagId: tagId.value, params: query });
  return { tagArticleList: res.data };
});
</script>

<style lang="scss" scoped>
.tag-article-wrap {
  padding: 30px;
  .title {
    display: block;
    text-align: center;
  }
  .jgh::after {
    padding: 0 5px;
    content: '·';
    font-weight: 600;
  }
  .article-item {
    display: flex;
    margin-bottom: 15px;
    width: 100%;
    border-radius: 5px;
    background: white;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
    .article-left {
      overflow: hidden;
      flex: 0 0 40%;
      margin: 20px;
      .head-img {
        box-sizing: border-box;
        width: 300px;
        height: 200px;
        cursor: pointer;
        transition: all 0.5s;

        @extend %coverBg;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .article-right {
      overflow: hidden;
      box-sizing: border-box;
      padding: 30px;
      .article-right-txt {
        color: $theme-color5;
        text-decoration: none;

        @extend %singleEllipsis;
      }
      .summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;
        font-size: 12px;
        .user-avatar {
          width: 20px;
          height: 20px;
          @extend %coverBg;

          border-radius: 50%;
        }
      }
    }
  }
}
</style>
