<template>
  <div class="home-banner-box">
    <a href="#" class="link">
      <img :src="url" alt="" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps(['url'])
</script>

<style lang="less" scoped>
.home-banner-box {
  width: 100%;
  height: 120px;
  margin: 22px 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
