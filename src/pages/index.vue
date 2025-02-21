<template>
  <div class="home-wrap">home</div>
</template>

<script lant="ts" setup>
useCacheRoute(60 * 2);
</script>

<style lang="scss" scoped>
.home-wrap {
  background-color: white;
  .title {
    display: block;
    text-align: center;
  }
}
</style>
