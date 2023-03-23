<template>
  <div class="buy">
    <ProductTitle
      :name="detailData.goodsname"
      :recommend="detailData.recommend.goodsname"
    ></ProductTitle>
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

$http
  .get('/goodsdetail', { params: { id: route.params.id } })
  .then(({ data: res }) => {
    detailData.value = res.res
  })
</script>

<style lang="less" scoped></style>
