<template>
  <!-- 顶部的主体navbar -->
  <div class="site-header" @mouseleave="drawer = false">
    <!-- nav抽屉用transition组件展示 -->
    <transition>
      <!-- 鼠标经过nav某一项展示商品抽屉，离开关闭 -->
      <SiteHeaderDrawer v-show="drawer" @mouseleave="drawer = false">
      </SiteHeaderDrawer>
    </transition>

    <div class="container">
      <div class="header-log">
        <a href="#" class="logo"></a>
      </div>
      <div class="header-nav">
        <div class="nav-list">
          <li class="nav-category">
            <SiteCategory></SiteCategory>
          </li>
          <!-- 根据数据动态展示nav -->
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
            <!-- 将根据当前nav的index 决定drawerItemList中的对应index的数据渲染挂载到抽屉中展示-->
            <teleport to=".site-header-drawer">
              <ItemChildren
                :drawerList="drawerItemList[index]"
                v-show="drawerIndex === index"
              ></ItemChildren>
            </teleport>
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
import SiteCategory from './SiteCategory.vue'
import ItemChildren from './ItemChildren.vue'
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
// nav栏数据
const navList = ref<Nav[]>([])
// 抽屉展示状态
const drawer = ref(false)
// 决定抽屉展示哪个nav下的商品栏的index
const drawerIndex = ref(-1)
// 商品栏的数据
const drawerItemList = ref<DraweItem[]>([])
// 获取nav数据
const getNavList = async () => {
  const { data: res } = await $http.get('/navlist')
  navList.value = res.res
}
// 鼠标经过nav事件
const openDrawer = (index: number) => {
  // 因为下标为7，8的没有对应的抽屉展示数据，所以鼠标经过不展示，并关闭抽屉
  if (index !== 7 && index !== 8) {
    drawer.value = true
    drawerIndex.value = index
  } else {
    drawer.value = false
  }
}
// 获取抽屉展示商品数据
const getDrawerItems = async () => {
  const { data: res } = await $http.get('/draweritemlist', {
    params: { index: drawerIndex.value }
  })
  drawerItemList.value = res.res
}

getNavList()
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
        position: relative;
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
  // transition组件的动画样式
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
