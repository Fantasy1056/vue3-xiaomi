<template>
  <div class="box-hd">
    <h2 class="title">{{ title }}</h2>
    <div class="more">
      <!-- type的tpye属性为more展示查看更多 -->
      <a href="#" class="link" v-if="type.type === 'more'">
        查看更多
        <svg
          class="icon"
          aria-hidden="true"
          style="font-size: 24px; line-height: 58px"
        >
          <use xlink:href="#icon-yuanjiantou-you"></use>
        </svg>
      </a>
      <!-- 否则展示可以切换商品的nav栏 -->
      <ul class="tab-list" v-else>
        <li
          :class="active === index ? 'tab-active' : ''"
          v-for="(l, index) in type.tabs"
          :key="index"
          @mouseenter="changeTab(index)"
        >
          {{ l }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { goodsStore } from '@/store/goodsStore'
// 父组件传递来的属性值
const props = defineProps(['type', 'title'])
// 仓库
const store = goodsStore()
// 鼠标经过nav栏的元素的index，index决定了哪个元素高亮
const active = ref(0)
// 鼠标经过切换展示的商品
const changeTab = (index: number) => {
  // 修改高亮的元素下标
  active.value = index
  // 仓库里有每个商品的属性对应默认展示的商品列表的下标
  // 鼠标经过时切换下标以展示不同的商品列表
  store.tabState[props.type.type] = active.value
}
</script>

<style lang="less" scoped>
.box-hd {
  position: relative;
  width: 100%;
  height: 58px;
  .title {
    font-weight: 400;
    height: 100%;
    line-height: 58px;
  }
  .more {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;

    .link {
      line-height: 58px;
    }
    .tab-list {
      padding-top: 16px;
      li {
        float: left;
        margin-left: 30px;
      }
      .tab-active {
        color: #ff6700;
        border-bottom: 2px solid #ff6700;
      }
    }
  }
}
</style>
