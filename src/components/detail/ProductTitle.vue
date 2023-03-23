<template>
  <div class="xm-product-box">
    <div class="nav-bar">
      <div class="container">
        <h2>{{ name }}</h2>
        <div class="con">
          <div class="left"><span>|</span>{{ recommend }}</div>
          <div class="right">
            <a href="">概述页</a>
            <a href=""><span>|</span>参数页</a>
            <a href=""><span>|</span>F码通道</a>
            <a href=""><span>|</span>咨询客服</a>
            <a href=""><span>|</span>用户评价</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps(['name', 'recommend'])
</script>

<style lang="less" scoped>
.xm-product-box {
  width: 100%;
  height: 65px;
  box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.3);
  border-top: 1px solid #e0e0e0;
  .nav-bar {
    width: 100%;
    height: 100%;
    color: #616161;
    font-size: 14px;
    .container {
      h2 {
        margin: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 60px;
        color: #424242;
        float: left;
      }
      .con {
        .left,
        .right {
          float: right;
          margin: 17px 0 0 0;
          span {
            margin: 0 0.5em;
            color: #424242;
          }
        }
        .left {
          float: left;
          margin-left: 5px;
          font-size: 12px;
          margin-top: 21px;
        }
      }
    }
  }
}
</style>
