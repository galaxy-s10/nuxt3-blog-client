<template>
  <div class="future-wrap">
    <h1 class="title">将来</h1>
    <hr class="hr-class" />
    <h2 class="title-desc">写给未来的自己</h2>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@media screen and (max-width: 720px) {
  .future-wrap {
    .list-wrap {
      .item-wrap {
        width: 100% !important;
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .future-wrap {
    .list-wrap {
      .item-wrap {
        width: 100% !important;
      }
    }
  }
}

.future-wrap {
  padding: 30px;
  .title {
    display: block;
    text-align: center;
  }

  .title-desc {
    text-align: center;
  }
}
</style>
