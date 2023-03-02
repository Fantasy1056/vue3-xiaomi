<template>
  <div class="box-hd">
    <h2 class="title">{{ title }}</h2>
    <div class="more">
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
const props = defineProps(['type', 'title'])
const store = goodsStore()
const active = ref(0)

const changeTab = (index: number) => {
  active.value = index
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
