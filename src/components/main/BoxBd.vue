<template>
  <div class="box-bd">
    <div class="span4">
      <ul class="brick-promo-list">
        <li
          class="brick-item"
          v-for="p in brickPromoList"
          :key="p.id"
          :class="brickPromoList.length === 1 ? 'brick-item-l' : 'brick-item-m'"
        >
          <img :src="p.url" alt="" />
        </li>
      </ul>
    </div>
    <div class="span16">
      <div
        v-for="(list, index) in goodslist"
        :key="index"
        v-show="tabIndex === index"
      >
        <ul class="brick-list">
          <li
            class="brick-item brick-item-m brick-item-m-2"
            v-for="item in list"
            :key="item.id"
          >
            <router-link :to="`/shop/buy/${item.id}`">
              <div class="figure-img">
                <img :src="item.goodsPicUrl" alt="" />
              </div>
              <h3 class="title">{{ item.goodsName }}</h3>
              <p class="desc">{{ item.goodsDesc }}</p>
              <p class="price">
                <span class="num">{{ item.goodsPrice }}</span
                >元<span>起</span>
                <del v-if="item.goodsOldPrice !== ''">
                  <span class="num">{{ item.goodsOldPrice }}</span
                  >元<span></span>
                </del>
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import $http from '@/utils/Axios'
import { ref, defineProps, computed } from 'vue'
import { goodsStore } from '@/store/goodsStore'
const props = defineProps(['goods'])
const store = goodsStore()
interface Promo {
  id: string
  url: string
}
interface Goods {
  id: string
  goodsName: string
  goodsDesc: string
  goodsPrice: string
  goodsOldPrice: string
  goodsPicUrl: string
}
interface GoodsList {
  [index: number]: Goods
}

const brickPromoList = ref<Promo[]>([])
const goodslist = ref<GoodsList[]>([])
const tabIndex = computed(() => {
  return store.tabState[props.goods]
})
const getBrickPromolList = async () => {
  const { data: res } = await $http.get('/brickpromolist', {
    params: { classify: props.goods }
  })
  brickPromoList.value = res.res.res
}
getBrickPromolList()

const getGoodsList = async () => {
  const {
    data: { res }
  } = await $http.get('/goodslist', {
    params: { classify: props.goods }
  })

  goodslist.value = res.res
}
getGoodsList()
</script>

<style lang="less" scoped>
.box-bd {
  width: 100%;
  height: 628px;
  margin-left: -14px;
  .brick-promo-list {
    height: 100%;
    .brick-item-m {
      height: 300px;
      padding: 0;
    }
  }
  div {
    height: 100%;
    .brick-list {
      width: 992px;
      height: 100%;
      margin-left: 0px;
      margin-bottom: -14px;
    }
  }

  .brick-item {
    float: left;
    width: 234px;
    margin-bottom: 14px;
    margin-left: 14px;
    background-color: #fff;
    z-index: 1;
    transition: box-shadow 0.3s linear;
    &:hover {
      box-shadow: 5px 2px 15px 2px rgba(0, 0, 0, 0.5);
    }
  }
  .brick-item-l {
    height: 614px;
  }
  .brick-item-m {
    height: 246px;
    padding: 34px 0 20px;
    .title {
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .desc {
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .price {
      margin: 0 10px 10px;
      text-align: center;
      color: #ff6700;
    }
  }
  .brick-item-m-2 {
    height: 300px;
    padding: 0;
    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 20px 0;
      .figure-img {
        width: 160px;
        height: 160px;
        margin: 0 auto 16px;
        img {
          width: 160px;
          height: 160px;
        }
      }
    }
    .title {
      margin: 0 10px 2px;
      font-size: 14px;
    }
    .desc {
      margin: 0 10px 10px;
      height: 18px;
      font-size: 12px;
      color: #b0b0b0;
    }
    .price {
      margin: 0 10px 14px;
      font-size: 14px;
    }
  }
  del {
    color: #b0b0b0;
    margin-left: 5px;
    font-size: 12px;
  }
}
</style>
