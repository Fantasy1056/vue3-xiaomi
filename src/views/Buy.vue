<template>
  <!-- 商品详情页面 -->
  <div class="buy">
    <!-- 商品详情页头部组件 -->
    <ProductTitle
      :name="detailData.goodsname"
      :recommend="detailData.recommend.goodsname"
    ></ProductTitle>
    <!--  商品详情页主体组件-->
    <ProductBox :detailData="detailData"></ProductBox>
  </div>
</template>

<script lang="ts" setup>
import $http from '@/utils/Axios'
import ProductTitle from '@/components/detail/ProductTitle.vue'
import ProductBox from '@/components/detail/ProductBox.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
interface DetailData {
  imgs: string[]
  recommend: {
    id: string
    goodsname: string
  }
  optionsInfo: {
    title: string
    info: {
      value: string
      isDefault: boolean
      price: number
    }[]
  }[]
  goodsname: string
  id: string
  desc: string
}
const detailData = ref<DetailData>({
  optionsInfo: [
    {
      title: 'xx',
      info: [
        {
          value: 'xx',
          isDefault: false,
          price: 0
        }
      ]
    }
  ],
  imgs: [],
  recommend: {
    goodsname: '',
    id: 'xxx'
  },
  goodsname: '',
  id: 'xx',
  desc: 'xxx'
})
// 根据当前路由的params的id属性,发起请求获得对应id的商品数据
$http
  .get('/goodsdetail', { params: { id: route.params.id } })
  .then(({ data: res }) => {
    detailData.value = res.res
  })
</script>

<style lang="less" scoped></style>
