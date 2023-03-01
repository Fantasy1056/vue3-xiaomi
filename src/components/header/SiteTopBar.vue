<template>
  <div class="site-topbar">
    <div class="container default-width">
      <div class="topbar-nav">
        <div v-for="nav in navList" :key="nav.id" class="link">
          <a href="#" class="nofollow">{{ nav.text }}</a>
          <span class="sep"></span>
        </div>
      </div>
      <div class="topbar-cart">
        <a href="#" class="to-cart">
          <svg
            class="icon"
            aria-hidden="true"
            style="font-size: 18px; margin-right: 5px"
          >
            <use xlink:href="#icon-gouwuche"></use>
          </svg>
          购物车
          <span class="cart-num">(0)</span>
        </a>
      </div>
      <div class="topbar-info">
        <div class="link" v-for="nav in siteUserInfo" :key="nav.id">
          <a href="#" class="nofollow">{{ nav.text }}</a>
          <span class="sep"></span>
        </div>
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
const siteUserInfo = ref<Nav[]>([])
const getNavList = async () => {
  const { data: res } = await $http.get('/toplist')
  navList.value = res.res
}
const getsiteUserInfo = async () => {
  const { data: res } = await $http.get('/siteuserinfo')
  siteUserInfo.value = res.res
}
getNavList()
getsiteUserInfo()
</script>

<style lang="less" scoped>
.site-topbar {
  width: 100%;
  height: 40px;
  background-color: #333;
  .container {
    height: 100%;
    margin: 0 auto;
    .topbar-nav,
    .topbar-info {
      float: left;
      height: 100%;
      .link {
        display: inline-block;
        line-height: 40px;
        height: 100%;
        .nofollow {
          display: inline-block;
          height: 100%;
          font-size: 12px;
          color: #b0b0b0;
          line-height: 40px;
        }
        .sep {
          display: inline-block;
          margin: 0 6px;
          height: 16px;
          width: 1px;
          transform: translateY(3px);
          background-color: #424242;
        }
      }
    }
    .topbar-info {
      float: right;
    }
    .topbar-cart {
      float: right;
      margin-left: 15px;
      height: 100%;
      .to-cart {
        display: inline-block;
        height: 100%;
        background-color: #424242;
        color: #b0b0b0;
        font-size: 12px;
        line-height: 40px;
        width: 120px;
        text-align: center;
      }
    }
  }
}
</style>
