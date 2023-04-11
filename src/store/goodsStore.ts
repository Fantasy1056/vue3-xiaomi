import { defineStore } from 'pinia'

export const goodsStore = defineStore('goods', {
  state() {
    return {
      // 主页内容里的各种商品切换展示的index
      tabState: {
        phone: 0,
        wearables: 0,
        computer: 0,
        appliance: 0
      }
    }
  }
})
