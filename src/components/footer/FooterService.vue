<template>
  <div class="footer-service">
    <ul class="list-service">
      <li v-for="(s, index) in serviceList" :key="index">
        <a href="#">
          <svg
            class="icon"
            aria-hidden="true"
            style="font-size: 20px; margin-right: 5px"
          >
            <use :xlink:href="s.icon"></use>
          </svg>
          {{ s.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const serviceList = [
  {
    text: '预约维修服务',
    icon: '#icon-wodeshouhou'
  },
  {
    text: '7天无理由退货',
    icon: '#icon-7tiantuihuan'
  },
  {
    text: '15天免费换货',
    icon: '#icon-15tianwuliyoutuihuo'
  },
  {
    text: '满69元包邮',
    icon: '#icon-liwu'
  },
  {
    text: '1100余家售后网点',
    icon: '#icon-31dingwei'
  }
]
</script>

<style lang="less" scoped>
.footer-service {
  width: 100%;
  padding: 27px 0;
  border-bottom: 1px solid #e0e0e0;
  .list-service {
    width: 100%;
    height: 25px;
    li {
      float: left;
      display: block;
      height: 25px;
      width: 19.8%;
      text-align: center;
      line-height: 25px;
      border-right: 1px solid #e0e0e0;
      &:last-child {
        border: 0;
      }
      a {
        font-size: 18px;
        color: #616161;
      }
    }
  }
}
</style>
