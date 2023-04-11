<template>
  <div class="home-brick-box">
    <BoxHd :type="type" :title="title"></BoxHd>
    <BoxBd :goods="goods"></BoxBd>
  </div>
</template>

<script lang="ts" setup>
import BoxHd from './BoxHd.vue'
import BoxBd from './BoxBd.vue'
import { defineProps } from 'vue'
// 父组件传递进来的各种属性，type属性包含tabs数组，如果有则这个商品列表可以切换，没有则展示查看更多
// title属性决定展示的商品标题
// goods属性的值决定了发起请求根据这个值获得回来的是什么商品
defineProps(['type', 'goods', 'title'])
</script>
<style lang="less" scoped>
.home-brick-box {
  width: 100%;
  height: 686px;
}
</style>
