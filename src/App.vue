<template>
  <div class="header">
    <SiteTopbar></SiteTopbar>
    <SiteHeader></SiteHeader>
  </div>
  <HomeHero></HomeHero>
</template>
<script setup lang="ts">
import SiteTopbar from '@/components/header/SiteTopBar.vue'
import SiteHeader from './components/header/SiteHeader.vue'
import HomeHero from './components/home/HomeHero.vue'
</script>
<style lang="less"></style>
