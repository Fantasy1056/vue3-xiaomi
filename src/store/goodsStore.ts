import { defineStore } from 'pinia'

export const goodsStore = defineStore('goods', {
  state() {
    return {
      tabState: {
        phone: 0,
        wearables: 0,
        computer: 0,
        appliance: 0
      }
    }
  }
})
