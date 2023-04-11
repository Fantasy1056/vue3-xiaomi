<template>
  <div class="footer-links">
    <div class="col-links col-links-frist">
      <dt></dt>
    </div>
    <!-- 根据数据动态渲染 -->
    <div class="col-links" v-for="(link, index) in serviceList" :key="index">
      <dt>{{ link.dt }}</dt>
      <dd v-for="(dd, index) in link.dd" :key="index">{{ dd }}</dd>
    </div>
    <div class="col-contact">
      <p class="phone">400-100-5678</p>
      <p>8:00-18:00（仅收市话费）</p>
      <a href="" class="btn">人工客服</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import $http from '@/utils/Axios'
interface Links {
  dt: string
  dd: string[]
}
const serviceList = ref<Links[]>([])

const getServiceList = async () => {
  const {
    data: { res }
  } = await $http.get('/servicelist')

  serviceList.value = res
}

getServiceList()
</script>

<style lang="less" scoped>
.footer-links {
  width: 100%;
  padding: 40px 0;
  .col-links {
    float: left;
    width: 160px;
    margin: 0;
    dt {
      margin: -1px 0 26px;
      font-size: 14px;
      line-height: 1.25;
      color: #424242;
    }
    dd {
      margin: 10px 0 0;
      font-size: 12px;
      color: #757575;
    }
  }
  .col-contact {
    float: right;
    width: 251px;
    height: 80px;
    border-left: 1px solid #e0e0e0;
    text-align: center;
    color: #616161;
    .phone {
      font-size: 22px;
      line-height: 1;
      color: #ff6700;
    }
    p {
      margin: 0 0 5px 0;
      font-size: 12px;
    }
    .btn {
      display: block;
      margin: 0 auto;
      width: 120px;
      height: 30px;
      border: 1px solid #ff6700;
      color: #ff6700;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
    }
  }
}
</style>
