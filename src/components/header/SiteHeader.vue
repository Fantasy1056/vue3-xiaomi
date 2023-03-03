<template>
  <div class="site-header" @mouseleave="drawer = false">
    <transition>
      <SiteHeaderDrawer
        v-show="drawer"
        @mouseleave="drawer = false"
        :drawerList="drawerItemList"
      ></SiteHeaderDrawer>
    </transition>

    <div class="container">
      <div class="header-log">
        <a href="#" class="logo"></a>
      </div>
      <div class="header-nav">
        <div class="nav-list">
          <li class="nav-category">
            <div class="site-category">
              <ul class="site-category-list">
                <li
                  class="site-category-item"
                  v-for="item in categoryList"
                  :key="item.id"
                >
                  <a href="" class="link">
                    {{ item.text }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="nav-item"
            v-for="(item, index) in navList"
            :key="item.id"
            :data-index="index"
            @mouseenter="openDrawer(index)"
          >
            <a href="#" class="link">
              <span>{{ item.text }}</span>
            </a>
          </li>
        </div>
      </div>
      <div class="header-search">
        <el-input
          class="w-50 m-2"
          suffix-icon="Search"
          size="large"
          style="height: 50px"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import $http from '@/utils/Axios'
import SiteHeaderDrawer from './SiteHeaderDrawer.vue'
import { ref } from 'vue'
interface Nav {
  id: string
  text: string
}
interface DraweItem {
  id: string
  title: string
  price: string
  picUrl: string
}
const navList = ref<Nav[]>([])
const drawer = ref(false)
const drawerIndex = ref(0)
const drawerItemList = ref<DraweItem[]>([])
const getNavList = async () => {
  const { data: res } = await $http.get('/navlist')
  navList.value = res.res
}

const categoryList = ref<Nav[]>([])
const getCategoryList = async () => {
  const { data: res } = await $http.get('/categorylist')
  categoryList.value = res.res
}

const openDrawer = (index: number) => {
  if (index !== 8 && index !== 9) {
    drawer.value = true
    drawerIndex.value = index
    getDrawerItems()
  }
}
const getDrawerItems = async () => {
  const { data: res } = await $http.get('/draweritemlist', {
    params: { index: drawerIndex.value }
  })
  drawerItemList.value = res.res
}
getNavList()
getCategoryList()
getDrawerItems()
</script>

<style lang="less" scoped>
.site-header {
  position: relative;
  width: 100%;
  height: 100px;
  z-index: 100;
  .container {
    height: 100%;
    .header-log {
      float: left;
      width: 62px;
      margin-top: 22px;
      .logo {
        position: relative;
        display: block;
        width: 56px;
        height: 56px;
        overflow: hidden;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          background: url('@/assets/logo.png');
          background-size: 56px;
          z-index: 1;
          opacity: 1;
          width: 56px;
          height: 56px;
        }
      }
    }
    .header-nav {
      float: left;
      width: 850px;
      .nav-list {
        float: left;
        width: 1100px;
        height: 100%;
        padding: 12px 0 0 30px;
        .nav-category {
          position: relative;
          float: left;
          width: 142px;
          height: 88px;
          padding-right: 15px;
          .site-category {
            position: absolute;
            top: 88px;
            left: -92px;
            width: 234px;
            height: 460px;
            background: rgba(105, 101, 101, 0.6);
            padding: 20px 0;
            font-size: 14px;
            z-index: 21;
            .site-category-list {
              width: 100%;
              height: 100%;
              .site-category-item {
                width: 100%;
                height: 42px;
                transition: background-color 0.1s linear;
                &:hover {
                  background-color: #ff6700;
                }
                .link {
                  display: block;
                  padding-left: 30px;
                  width: 100%;
                  height: 42px;
                  line-height: 42px;
                  color: #fff;
                }
              }
            }
          }
        }
        .nav-item {
          float: left;

          .link {
            display: block;
            padding: 26px 10px 38px;
            color: #333;
            font-size: 16px;
            transition: color 0.1s linear;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }
    }
    .header-search {
      float: left;
      width: 296px;
      height: 50px;
      margin-top: 22px;
    }
  }
  .v-enter-to,
  .v-leave-from {
    height: 230px;
    transition: height 0.3s linear;
  }

  .v-enter-from,
  .v-leave-to {
    height: 0px;
    transition: height 0.3s linear;
  }
}
</style>
