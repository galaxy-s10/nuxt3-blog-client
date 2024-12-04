<template>
  <div class="collapse-wrap">
    <div class="header">
      <div class="title">
        <slot name="ico"></slot>
        <b>{{ title }}</b>
      </div>
      <div
        class="ico-wrap"
        @click="isOpen = isOpen ? false : true"
      >
        <i
          :class="{
            ico: true,
            down: !isOpen ? true : false,
          }"
        ></i>
      </div>
    </div>
    <div class="content">
      <div v-show="isOpen">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const title = ref('');
const isOpen = ref(false);
</script>

<style lang="scss" scoped>
.collapse-wrap {
  // overflow: hidden;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid $theme-color4;
  border-radius: 5px;
  background: $theme-color6;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      margin: 8px 0;
    }
    .ico-wrap {
      width: 20px;
      height: 20px;
      cursor: pointer;
      transform: translateY(2px);
      .ico {
        width: 10px;
        height: 10px;
        @include arrow('bottom', 6px);
        &.down {
          transform: rotate(180deg);
        }
      }
    }
  }
  .content {
    height: 100%;
    transition: height 0.5s;
    .item {
      margin-bottom: 4px;
    }
  }
}
</style>
