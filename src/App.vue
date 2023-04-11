<template>
  <!-- 头部区域 -->
  <div class="header">
    <SiteTopbar></SiteTopbar>
    <SiteHeader></SiteHeader>
  </div>
  <router-view></router-view>
  <!-- 底部和侧边栏区域 -->
  <Footer></Footer>
  <SideBar></SideBar>
</template>
<script setup lang="ts">
import SiteTopbar from '@/components/header/SiteTopBar.vue'
import SiteHeader from '@/components/header/SiteHeader.vue'
import Footer from '@/components/footer/Footer.vue'
import SideBar from '@/components/SideBar.vue'
</script>
<style lang="less"></style>
