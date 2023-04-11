<template>
  <!-- 抽屉中展示的商品栏 -->
  <div class="item-children">
    <div class="container">
      <ul class="item-list">
        <!-- 根据数据动态渲染内容 -->
        <li
          v-for="(item, index) in drawerList"
          :key="item.id"
          :class="index === 0 ? 'frist' : ''"
        >
          <a href="#" class="link">
            <div class="figure">
              <img :src="item.picUrl" alt="" />
            </div>
            <div class="title">{{ item.title }}</div>
            <p class="price">{{ item.price }}元起</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps(['drawerList'])
</script>

<style lang="less" scoped>
.item-list {
  font-size: 12px;
  li {
    position: relative;
    float: left;
    width: 180px;
    padding: 35px 12px 0;
    text-align: center;
    box-sizing: content-box;
    .link {
      width: 100%;
      height: 100%;
      .figure {
        img {
          width: 160px;
          height: 110px;
        }
      }
      .title {
        line-height: 20px;
        color: #333;
      }
      .price {
        line-height: 20px;
        color: #ff6700;
      }
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 35px;
      z-index: 1;
      width: 1px;
      height: 100px;
      background-color: #e0e0e0;
    }
  }
  .frist {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 35px;
      z-index: 1;
      width: 1px;
      height: 100px;
      background-color: #fff;
    }
  }
}
</style>
