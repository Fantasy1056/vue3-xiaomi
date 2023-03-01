<template>
  <div class="site-header">
    <div class="container default-width">
      <div class="header-log">
        <a href="#" class="logo"></a>
      </div>
      <div class="header-nav">
        <div class="nav-list">
          <li class="nav-category"></li>
          <li
            class="nav-item"
            v-for="(item, index) in navList"
            :key="item.id"
            :data-index="index"
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
import { ref } from 'vue'
interface Nav {
  id: string
  text: string
}
const navList = ref<Nav[]>([])
const getNavList = async () => {
  const { data: res } = await $http.get('/navlist')
  navList.value = res.res
}
getNavList()
</script>

<style lang="less" scoped>
.site-header {
  width: 100%;
  height: 100px;
  .container {
    height: 100%;
    margin: 0 auto;
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
}
</style>
