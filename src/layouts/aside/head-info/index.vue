<template>
  <div class="user-info">
    <div
      ref="dndRef"
      class="container"
    >
      <div class="bgc"></div>
      <div class="user-avatar">
        <img
          v-if="true"
          src="https://resource.hsslive.cn/image/7e048083bb5dccde76018625b644c84b.webp"
        />
        <img v-else />
        <div
          :class="{
            status: true,
            connect: true,
          }"
        ></div>
      </div>

      <div class="info">
        <div class="name">33</div>
        <p class="title">保持热爱</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.user-info {
  border-radius: 5px;
  background-color: white;

  .container {
    overflow: hidden;
    padding-bottom: 10px;
    border: 1px solid $theme-color4;
    background: $theme-color6;
    .bgc {
      height: 80px;
      background-image: -webkit-linear-gradient(
        43deg,
        #4158d0 0%,
        #c850c0 46%,
        #ffcc70 100%
      );
      background-image: -moz-linear-gradient(
        43deg,
        #4158d0 0%,
        #c850c0 46%,
        #ffcc70 100%
      );
      background-image: -o-linear-gradient(
        43deg,
        #4158d0 0%,
        #c850c0 46%,
        #ffcc70 100%
      );
      background-image: linear-gradient(
        43deg,
        #4158d0 0%,
        #c850c0 46%,
        #ffcc70 100%
      );
    }
    .user-avatar {
      position: relative;
      left: 50%;
      width: 80px;
      height: 80px;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: all 0.5s;
        transform: rotate(0);
        &:hover {
          transform: rotate(1turn);
        }
      }
      .status {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #b4b8ba;
        cursor: pointer;
        &.connect {
          background-color: #73d84d;
        }
      }
    }
    .info {
      margin-top: -30px;
      .name {
        text-align: center;
        font-weight: bold;
      }
      .title {
        margin: 4px;
        text-align: center;
      }
    }
  }
}
</style>
