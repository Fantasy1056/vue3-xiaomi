<template>
  <div class="home-hero-swiper">
    <el-carousel height="460px">
      <el-carousel-item v-for="item in swiperList" :key="item">
        <img :src="item.url" alt="" style="width: 100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import $http from '@/utils/Axios'
import { ref } from 'vue'
interface Swiper {
  id: string
  url: string
}
const swiperList = ref<Swiper[]>([])
const getSwiperList = async () => {
  const { data: res } = await $http.get('/swiperlist')
  swiperList.value = res.res
}
getSwiperList()
</script>

<style lang="less" scoped>
.home-hero-swiper {
  height: 460px;
  /deep/ .el-carousel__arrow--left {
    left: 250px;
  }
}
</style>
