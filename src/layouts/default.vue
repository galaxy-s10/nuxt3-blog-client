<template>
  <div class="blog-wrap">
    <n-config-provider :theme-overrides="themeOverrides">
      <LayoutHeader></LayoutHeader>
      <LayoutTypelist></LayoutTypelist>
      <div class="main-wrap">
        <div class="left"><NuxtPage></NuxtPage></div>
        <div class="right">
          <LayoutAside></LayoutAside>
        </div>
      </div>
      <LayoutFooter></LayoutFooter>
    </n-config-provider>
  </div>
</template>

<script lang="ts" setup>
import type { GlobalThemeOverrides } from 'naive-ui';
import LayoutAside from './aside/index.vue';
import LayoutFooter from './footer/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutTypelist from './typelist/index.vue';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#ffd700',
    primaryColorHover: '#ffd700',
  },
};
</script>

<style scoped lang="scss">
.blog-wrap {
  padding-top: 120px;
  .main-wrap {
    margin: 0 auto;
    width: 1100px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .left {
      width: calc(100% - 320px);
    }
    .right {
      box-sizing: border-box;
      width: 300px;
    }
  }
}

/* 屏幕宽度小于 1200px */
@media screen and (max-width: 1200px) {
  .blog-wrap {
    .main-wrap {
      width: 90%;
      padding: 0 10px;
    }
  }
}

/* 屏幕宽度小于 990px */
@media screen and (max-width: 990px) {
  .blog-wrap {
    .main-wrap {
      width: 900px;
    }
  }
}

/* 响应式布局 - 小于 540px */
@media screen and (max-width: 540px) {
  .blog-wrap {
    .main-wrap {
      box-sizing: border-box;
      padding: 0 10px;
      width: 100%;
      .left {
        width: 100% !important;
      }
      .right {
        display: none !important;
      }
    }
  }
}
</style>
