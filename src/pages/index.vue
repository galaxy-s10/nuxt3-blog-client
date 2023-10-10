<template>
  <div>
    hi~
    <n-button>{{ appStore.article.rows.length }}</n-button>
    <div
      v-for="item in appStore.article.rows"
      :key="item.id"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script setup>
const appStore = useAppStore();

onMounted(() => {
  window.$message.info('hi');
});
</script>

<style lang="scss" scoped></style>
