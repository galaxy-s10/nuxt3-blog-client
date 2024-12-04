<template>
  <nav
    class="fix-type-wrap"
    :class="{ show: hiddenHeader }"
  >
    <ul class="type-wrap">
      <li
        :class="{ active: typeId === '' ? true : false }"
        @click="all()"
      >
        全部
      </li>
      <li
        v-for="(item, index) in typeList"
        :key="index"
        :class="{ active: item.id === typeId ? true : false }"
        @click="changeType(item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
const visible = ref(false);
const hiddenHeader = ref(false);
const typeId = ref(-1);

const appStore = useAppStore();
const { typeList } = toRefs(appStore);

function changeType() {}
function all() {}
</script>

<style lang="scss" scoped>
/* 屏幕宽度大于 1200px */

.fix-type-wrap {
  position: fixed;
  top: $fix-header-height;
  left: 0;
  z-index: 99;
  width: 100%;
  border-bottom: 1px solid $theme-color4;
  background-color: $theme-color6;
  transition: all 0.3s;
  transform: translateZ(0);

  &.show {
    transform: translate3d(0, -60px, 0);
  }
  .type-wrap {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    width: 1100px;
    height: 40px;
    color: $theme-color1;
    .active {
      position: relative;
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: rgba($color: #604bc3, $alpha: 0.6);
        content: '';
        transform: translate(90%, -50%);
      }
    }
    li {
      display: block;
      margin-right: 10px;
      cursor: pointer;

      user-select: none;
    }
  }
}

/* 屏幕宽度小于 1200px */
@media screen and (max-width: 1200px) {
  .fix-type-wrap {
    .type-wrap {
      width: 90%;
    }
  }
}
/* 屏幕宽度小于 990px */
@media screen and (max-width: 990px) {
  .fix-type-wrap {
    .type-wrap {
      padding: 0 10px;
      width: 100%;
    }
  }
}
</style>
