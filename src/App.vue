<template>
  <div class="header">
    <SiteTopbar></SiteTopbar>
    <SiteHeader></SiteHeader>
  </div>
  <router-view></router-view>
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
