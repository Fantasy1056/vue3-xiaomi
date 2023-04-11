<template>
  <!-- 路由展示的主页区域 -->
  <div class="page-main home-main">
    <div class="container">
      <HomeBannerBox
        url="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f2a2f0f25c8c84b288da3a5fdc500743.jpg?thumb=1&w=1226&h=120&f=webp&q=90"
      ></HomeBannerBox>
      <!-- 根据商品属性列表循环渲染商品列表，并传入对应的属性 -->
      <HomeBrickBox
        :type="box.type"
        :goods="box.goods"
        :title="box.title"
        v-for="(box, index) in boxList"
        :key="index"
      ></HomeBrickBox>
      <HomeBannerBox
        url="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1226&h=120&f=webp&q=90"
      ></HomeBannerBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeBannerBox from './HomeBannerBox.vue'
import HomeBrickBox from './HomeBrickBox.vue'

const boxList = [
  {
    type: { type: 'more' },
    title: '手机',
    goods: 'phone'
  },
  {
    type: { type: 'wearables', tabs: ['耳机', '穿戴'] },
    title: '智能穿戴',
    goods: 'wearables'
  },
  {
    type: { type: 'computer', tabs: ['热门'] },
    title: '笔记本 平板',
    goods: 'computer'
  },
  {
    type: { type: 'appliance', tabs: ['热门', '电视影音'] },
    title: '家电',
    goods: 'appliance'
  }
]
</script>

<style lang="less" scoped>
.page-main {
  padding-top: 4px;
  padding-bottom: 12px;
}
.home-main {
  background-color: #f5f5f5;
}
</style>
