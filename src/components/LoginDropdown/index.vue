<template>
  <div>
    <n-dropdown
      trigger="hover"
      :options="options"
      :show-arrow="true"
      @select="handleSelect"
    >
      <div class="login-txt">
        <div class="txt">登录</div>
        <div class="ico"></div>
      </div>
    </n-dropdown>
  </div>
</template>

<script lang="ts" setup>
const options = ref([
  {
    label: 'QQ登录',
    key: 'qq',
  },
  {
    label: 'GitHub登录',
    key: 'github',
  },
]);
function handleSelect() {
  console.log('handleSelect');
}
</script>

<style lang="scss" scoped>
.login-txt {
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  .ico {
    margin-top: -4px;
    margin-left: 8px;

    @include arrow('bottom', 6px);
  }
}

/* 响应式布局 - 大于540px */
@media screen and (min-width: 540px) {
  .login-txt {
    font-size: 16px;
    .ico {
      margin-top: -6px;
      margin-left: 10px;
    }
  }
}
</style>
