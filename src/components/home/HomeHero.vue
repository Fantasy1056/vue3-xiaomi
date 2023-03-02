<template>
  <div class="home-hero container">
    <Swiper></Swiper>
    <Sub></Sub>
  </div>
</template>

<script lang="ts" setup>
import Swiper from './Swiper.vue'
import Sub from './Sub.vue'
</script>

<style lang="less" scoped>
.home-hero {
  height: 670px;
}
</style>
