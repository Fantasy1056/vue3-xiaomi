<template>
  <div class="site-header-drawer">
    <div class="container">
      <ul class="item-list">
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
.site-header-drawer {
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 230px;
  background-color: #fff;
  z-index: 99;
  border-top: 1px solid #ccc;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
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
}
</style>
