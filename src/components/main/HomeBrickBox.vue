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
defineProps(['type', 'goods', 'title'])
</script>

<style lang="less" scoped>
.home-brick-box {
  width: 100%;
  height: 686px;
}
</style>
