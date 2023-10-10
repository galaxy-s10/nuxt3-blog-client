<template>
  <div class="blog-wrap">
    <LayoutHeader></LayoutHeader>
    <LayoutTypelist></LayoutTypelist>
    <LayoutFooter></LayoutFooter>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
import LayoutFooter from './footer/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutTypelist from './typelist/index.vue';
</script>

<style scoped lang="scss">
.blog-wrap {
  padding-top: 120px;
}
</style>
