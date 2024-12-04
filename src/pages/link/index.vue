<template>
  <div class="link-wrap">
    <h1 class="title">友链</h1>
    <hr class="hr-class" />
    <ul class="link-list-wrap">
      <template v-if="asyncData.data.value?.linkList.length">
        <li
          v-for="(item, index) in asyncData.data.value?.linkList"
          :key="index"
          class="li-item-wrap"
        >
          <a
            :href="item.url"
            class="li-item-link"
            target="_blank"
          >
            <div
              v-lazy:background-image="item.avatar"
              class="user-avatar"
            ></div>
            <div class="desc">
              <span>{{ item.name }}</span>
              <span
                class="txt"
                :title="item.desc"
              >
                {{ item.desc }}
              </span>
            </div>
          </a>
        </li>
      </template>
      <span
        v-else
        class="null"
      >
        暂无友链~
      </span>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { fetchLinkList } from '~/api/link';

const asyncData = await useAsyncData(async () => {
  const res = await fetchLinkList({ orderName: 'created_at', orderBy: 'desc' });
  return { linkList: res.data.rows };
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 720px) {
  .li-item-wrap {
    flex-basis: 50% !important;
  }
}
@media screen and (max-width: 540px) {
  .li-item-wrap {
    flex-basis: 100% !important;
  }
}
.link-wrap {
  padding: 30px;

  .title {
    display: block;
    text-align: center;
  }
  .link-list-wrap {
    display: flex;
    overflow-y: scroll;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 40px 0;
    padding: 0;
    max-height: 400px;

    @extend %hideScrollbar;
    &::after {
      margin: 0 1%;
      width: 30%;
      content: '';
    }
    .li-item-wrap {
      position: relative;
      overflow: hidden;
      margin: 0 1%;
      margin-bottom: 10px;
      width: 30%;
      border-radius: 4px;
      list-style: none;
      .li-item-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid $theme-color4;
        color: $theme-color5;
        text-decoration: none;

        .user-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          transition: all 0.5s;
          @extend %coverBg;
        }
        .desc {
          flex: 1;
          margin-left: 8px;
          font-size: 14px;
          .txt {
            @include multiEllipsis(2);
          }
        }
      }
      &::before {
        position: absolute;
        left: -60px;
        z-index: -1;
        width: 0;
        height: 100%;
        background-color: rgba(255, 174, 173, 0.5);
        content: '';
        transition: all 0.5s;
        transform: skewX(45deg);
      }
      &:hover {
        z-index: 2;
        .li-item-link {
          border-color: rgba(255, 174, 173, 1);
        }
        .user-avatar {
          transform: rotate(360deg);
        }
        &:before {
          width: 160%;
        }
      }
    }
    .null {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
