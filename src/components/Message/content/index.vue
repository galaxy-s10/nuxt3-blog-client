<template>
  <div></div>
</template>

<script>
import { useMessage } from 'naive-ui';
import { defineComponent } from 'vue';

// content
export default defineComponent({
  setup() {
    window.$message = useMessage();
  },
});
</script>

<style lang="scss" scoped></style>
