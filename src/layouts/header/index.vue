<template>
  <header :class="{ 'fix-header-wrap': true, hidden: hiddenHeader }">
    <div class="header-wrap">
      <div class="logo">
        <nuxt-link
          v-slot="{ navigate }"
          to="/"
          custom
        >
          <span @click="navigate">Billd</span>
        </nuxt-link>
        <sup>Blog</sup>
      </div>
      <nav class="nav">
        <ul class="nav-menu">
          <li
            v-for="(item, index) in navList"
            :key="index"
            class="item"
          >
            <!-- https://router.vuejs.org/zh/api/#custom，默认用a标签包裹元素，可以添加custom改掉这个行为 -->
            <nuxt-link :to="item.path">
              <span>{{ item.title }}</span>
              <div
                v-if="item.badge"
                class="badge"
              >
                {{ item.badge > 99 ? '99+' : item.badge }}
              </div>
            </nuxt-link>
          </li>
        </ul>
        <div class="nav-menu-mini"></div>
      </nav>
      <div class="search"></div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const hiddenHeader = ref(false);
const navList = ref([
  {
    title: '首页',
    path: '/',
  },
  {
    title: '归档',
    path: '/history',
  },
  {
    title: '标签',
    path: '/tag/1',
  },
  {
    title: '作品',
    path: '/works',
  },
  {
    title: '友链',
    path: '/link',
  },
  {
    title: '留言',
    path: '/msg',
  },
  {
    title: '互动',
    path: '/interaction',
    badge: 0,
  },
  {
    title: '关于',
    path: '/about',
  },
]);
const visible = ref(true);
const title = ref('首页');
const keyWord = ref('');

function handleCommand() {}
function handleSelect() {}
async function querySearchAsync(keyWord, cb) {}
</script>

<style lang="scss" scope>
@media screen and (max-width: 540px) {
  .header {
    height: 50px;
    line-height: 50px;
  }
  .search {
    width: 30%;
  }
  .logo h2 {
    font-size: 18px;
  }
  .logo h2 sup {
    font-size: 10px;
  }
}
.dark {
  .fix-header-wrap {
    background: $theme-color3;
  }
}
.fix-header-wrap {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid $theme-color2;
  background: $theme-color6;
  transition: all 0.3s;
  transform: translateZ(0);

  &.hidden {
    transform: translate3d(0, -100%, 0);
  }
  .header-wrap {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    .logo {
      font-size: 20px;
      cursor: pointer;
      sup {
        font-size: 13px;
      }
    }
    .nav {
      ul li {
        position: relative;
        display: inline-block;
        cursor: pointer;
      }
      ul li:hover {
        color: $theme-color1;
      }
      .nav-menu {
        margin: 0;
        padding: 0;
        .item {
          margin: 0 16px;

          user-select: none;
          a {
            position: relative;
            color: $theme-color5;
            text-decoration: none;
            .badge {
              position: absolute;
              top: -6px;
              right: 0px;
              padding: 0 3px;
              height: 16px;
              border-radius: 6px;
              background-color: #da3231;
              color: white;
              font-weight: bold;
              font-size: 12px;
              line-height: 16px;
              transform: translateX(100%);
            }
          }
        }
        .item:hover:before {
          left: 0;
          width: 100%;
        }
        .item:before {
          position: absolute;
          bottom: 10px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: $theme-color1;
          content: '';
          transition: all 0.3s;
        }
      }
      .nav-menu-mini {
        display: none;
        text-align: center;
      }
    }
  }
}
</style>
