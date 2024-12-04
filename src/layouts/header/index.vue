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
            <nuxt-link :to="item.key">
              <span>{{ item.label }}</span>
              <div
                v-if="item.badge"
                class="badge"
              >
                <div class="min-font">hot</div>
              </div>
            </nuxt-link>
          </li>
        </ul>
        <div class="nav-menu-mini">
          <n-dropdown
            trigger="hover"
            :options="navList"
            :show-arrow="true"
            @select="handleSelect"
          >
            <div class="nav-txt">
              <div class="txt">
                {{ navList.find((v) => v.key === $route.path)?.label }}
              </div>
              <div class="ico" />
            </div>
          </n-dropdown>
        </div>
      </nav>
      <div class="search-cpt">
        <n-input
          round
          placeholder="搜索"
        >
          <template #suffix>
            <n-icon :component="SearchOutline" />
          </template>
        </n-input>
      </div>
      <div class="login-cpt">
        <LoginDropdown />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { SearchOutline } from '@vicons/ionicons5';

const router = useRouter();
const hiddenHeader = ref(false);
const navList = ref([
  {
    label: '首页',
    key: '/',
  },
  {
    label: '归档',
    key: '/history',
  },
  {
    label: '标签',
    key: '/tag/1',
  },
  {
    label: '作品',
    key: '/works',
  },
  {
    label: '友链',
    key: '/link',
  },
  {
    label: '留言',
    key: '/msg',
  },
  {
    label: '互动',
    key: '/interaction',
    badge: '',
  },
  {
    label: '关于',
    key: '/about',
  },
]);

function handleSelect(_key, option) {
  router.push(option.key);
}
</script>

<style lang="scss" scope>
/* 屏幕宽度大于 1200px */
.fix-header-wrap {
  position: fixed;
  top: 0;
  left: 0;
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
    box-sizing: border-box;
    margin: 0 auto;
    width: 1200px;
    height: $fix-header-height;
    line-height: $fix-header-height;
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
              top: -8px;
              right: 0px;
              padding: 0 1px;
              border-radius: 3px;
              background-color: #da3231;
              color: white;
              transform: translateX(100%);
              .min-font {
                line-height: 1;
                transform-origin: center center;

                @include minFont(10);
              }
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
        .nav-txt {
          font-size: 14px;
        }
      }
    }
    .search-cpt {
      width: 200px;
    }
  }
}

/* 屏幕宽度小于 1200px */
@media screen and (max-width: 1200px) {
  .fix-header-wrap {
    .header-wrap {
      width: 90%;
    }
  }
}

/* 屏幕宽度小于 990px */
@media screen and (max-width: 990px) {
  .fix-header-wrap {
    .header-wrap {
      padding: 0 10px;
      width: 100%;
      .nav {
        .nav-menu {
          .item {
            margin: 0 10px;
          }
        }
      }

      .search-cpt {
        width: 130px;
      }
    }
  }
}

/* 屏幕宽度小于 720px */
@media screen and (max-width: 720px) {
  .fix-header-wrap {
    .header-wrap {
      width: 100%;
      .nav-menu {
        display: none !important;
      }
      .nav-menu-mini {
        display: block !important;
      }
      .search-cpt {
        width: 140px;
      }
    }
    .type-wrap {
      width: 100%;
    }
  }
}
</style>
