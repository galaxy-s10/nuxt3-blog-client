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
/* 响应式布局 - 大于540px */
@media screen and (min-width: 540px) {
  .type-wrap {
    width: 100%;
  }
}

/* 响应式布局 - 大于 990px */
@media screen and (min-width: 990px) {
  .type-wrap {
    width: 900px;
  }
}

/* 响应式布局 - 大于 1200px */
@media screen and (min-width: 1200px) {
  .type-wrap {
    width: 1100px;
  }
}

/* 响应式布局,大于540px */
@media screen and (min-width: 540px) {
  .show {
    transform: translateY(-60px);
  }
}

.dark {
  .fix-type-wrap {
    background: $theme-color3;
  }
}
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
.fix-type-wrap {
  position: fixed;
  top: 60px;
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
    margin: 0 auto;
    padding: 0;
    height: 40px;
    color: $theme-color1;
    li {
      display: block;
      margin-right: 10px;
      cursor: pointer;

      user-select: none;
    }
  }
}
</style>
