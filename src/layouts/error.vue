<template>
  <div class="blog-wrap">
    <LayoutHeader></LayoutHeader>
    <LayoutTypelist></LayoutTypelist>
    <div class="main-wrap"><slot></slot></div>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script setup>
import LayoutFooter from './footer/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutTypelist from './typelist/index.vue';
</script>

<style scoped lang="scss">
/* 响应式布局 - 小于 540px */
@media screen and (max-width: 540px) {
  .main-wrap {
    box-sizing: border-box;
    padding: 0 10px;
  }
  .main-wrap {
    .left {
      width: 100% !important;
    }
    .right {
      display: none !important;
    }
  }
  .article-left {
    margin: 0 !important;
  }
}

/* 响应式布局 - 大于540px */
@media screen and (min-width: 540px) {
  .main-wrap {
    width: 100%;
  }
}

/* 响应式布局 - 大于 990px */
@media screen and (min-width: 990px) {
  .main-wrap {
    width: 900px;
  }
}

/* 响应式布局 - 大于 1200px */
@media screen and (min-width: 1200px) {
  .main-wrap {
    width: 1100px;
  }
}

.blog-wrap {
  padding-top: 120px;
  .main-wrap {
    margin: 0 auto;
    background-color: #fff;
  }
}
</style>
