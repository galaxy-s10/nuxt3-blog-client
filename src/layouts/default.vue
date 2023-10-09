<template>
  <div class="blog-wrap">
    <LayoutHeader></LayoutHeader>
    <LayoutFooter></LayoutFooter>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script lang="ts" setup>
import LayoutFooter from './footer/index.vue';
import LayoutHeader from './header/index.vue';
</script>

<style scoped lang="scss">
.blog-wrap {
}
</style>
