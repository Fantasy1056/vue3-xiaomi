<template>
  <div class="side-bar">
    <a
      href=""
      class="item"
      v-for="(item, index) in sideBarList"
      :key="index"
      ref="top"
    >
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#' + item.icon"></use>
      </svg>
      <span>{{ item.title }}</span>
    </a>
    <a href="javascript:;" class="item top" ref="top" @click="backToTop">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-huidaodingbu"></use>
      </svg>
      <span>回到顶部</span>
    </a>
  </div>
</template>

<script lang="ts" setup>
const sideBarList = [
  {
    title: '手机APP',
    icon: 'icon-shouji'
  },
  {
    title: '个人中心',
    icon: 'icon-personal'
  },
  {
    title: '售后服务',
    icon: 'icon-wodeshouhou'
  },
  {
    title: '人工客服',
    icon: 'icon-kefu'
  },
  {
    title: '购物车',
    icon: 'icon-gouwuche'
  }
]

const backToTop = () => {
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}
</script>

<style lang="less" scoped>
.side-bar {
  position: fixed;
  top: 200px;
  right: 0;
  .item {
    display: block;
    width: 84px;
    height: 92px;
    color: #757575;
    margin-top: -1px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    transition: color 0.2s;
    font-size: 14px;
    .icon {
      position: relative;
      display: block;
      width: 30px;
      height: 30px;
      margin: 18px auto 8px;
      font-size: 24px;
    }

    &:hover {
      color: #ff6700;
    }
  }
  .top {
    margin-top: 15px;
  }
}
</style>
