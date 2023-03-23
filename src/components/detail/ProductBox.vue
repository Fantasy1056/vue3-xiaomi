<template>
  <div class="mi-detail">
    <div class="product-box container">
      <div class="img-left">
        <el-carousel height="560px">
          <el-carousel-item
            v-for="(item, index) in detailData.imgs"
            :key="index"
          >
            <img :src="item" style="width: 560px; height: 560px" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="product-con">
        <h2>{{ detailData.goodsname }}</h2>
        <p class="desc">
          <span style="color: #ff4a00"
            >「赠小米移动流量卡；购机抽奖赢好礼；信用卡分期支付享优惠」</span
          >{{ detailData.desc }}
        </p>
        <p class="company-info">小米自营</p>
        <p class="price-info">{{ currentPrice }} 元</p>
        <div class="line"></div>
        <div class="address-box">
          <div class="product-address">
            <div>
              <div class="address-info">
                <span>北京</span><span>北京市</span><span>海定区</span
                ><span>清河街道</span>
              </div>
            </div>
            <p class="desc">有现货</p>
          </div>
        </div>
        <div class="buy-options">
          <div
            class="buy-box-child"
            v-for="(option, index) in detailData.optionsInfo"
            :key="index"
          >
            <div class="title">{{ option.title }}</div>
            <ul>
              <li
                v-for="(value, index) in option.info"
                :key="index"
                :class="{ active: value.isDefault }"
                @click="changeChoice(option.info, index)"
              >
                <a :title="value.value" :class="{ active: value.isDefault }">{{
                  value.value
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="selected-list">
          <ul>
            <li>
              {{ selectedInfo }} <span>{{ currentPrice }} 元</span>
            </li>
          </ul>
          <div class="total-price">总计: {{ currentPrice }} 元</div>
        </div>
        <div class="btn-box">
          <div class="sale-btn">
            <a href="" class="btn btn-primary">加入购物车</a>
          </div>
          <div class="favorite-btn">
            <a href="" class="btn-gray btn-like">喜欢</a>
          </div>
        </div>
      </div>
    </div>
    <div class="product-detail">
      <div class="title container">价格说明</div>
      <div class="img-box container">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43e2954feb6d1b108438481f1d5b0bd3.png"
          alt=""
          class="container"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
const props = defineProps(['detailData'])

interface Info {
  value: string
  isDefault: boolean
  price: number
}
const currentPrice = computed(() => {
  const res: Info = props.detailData.optionsInfo[0].info?.find(
    (item: Info) => item.isDefault
  )
  return res.price || 0
})

const selectedInfo = computed(() => {
  const { value: storage } = props.detailData.optionsInfo[0].info?.find(
    (item: Info) => item.isDefault
  )
  const { value: color } = props.detailData.optionsInfo[1].info?.find(
    (item: Info) => item.isDefault
  )

  return props.detailData.goodsname + ' ' + storage + ' ' + color || ''
})

const changeChoice = (option: Info[], index: number) => {
  option.forEach((item) => {
    item.isDefault = false
  })
  option[index].isDefault = true
}
</script>

<style lang="less" scoped>
.mi-detail {
  width: 100%;
  .product-box {
    display: flex;
    margin: 0 auto;
    padding-top: 32px;
    padding-bottom: 12px;
    .product-con {
      width: 50%;
      margin-left: 20px;
      font-size: 14px;
      h2 {
        font-weight: normal;
      }
      .desc {
        color: #b0b0b0;
        margin: 0;
        padding: 0;
        padding-top: 8px;
        line-height: 1.5;
        font-size: 14px;
      }
      .company-info {
        color: #ff6700;
        margin-bottom: 0;
        margin-top: 14px;
      }
      .price-info {
        display: block;
        font-size: 18px;
        line-height: 1;
        color: #ff6700;
        padding: 12px 0 10px;
        font-size: 18px;
      }
      .line {
        margin-top: 12px;
        border-bottom: 1px solid #e0e0e0;
      }
      .address-box {
        margin: 20px 0;
        .product-address {
          padding: 30px 50px;
          position: relative;
          background: #fafafa;
          border: 1px solid #e0e0e0;
          .address-info {
            span {
              margin-right: 15px;
              color: #333;
            }
          }
          .desc {
            color: #ff6700;
          }
        }
      }
      .buy-options {
        .buy-box-child {
          margin-bottom: 30px;
          position: relative;
          .title {
            font-size: 18px;
          }
          ul {
            overflow: hidden;
            li {
              width: 50%;
              float: left;
              margin-right: 9px;
              margin-top: 10px;
              line-height: 42px;
              height: 42px;
              position: relative;
              border: 1px solid #e0e0e0;
              list-style: none;
              cursor: pointer;
              -webkit-transition: all 0.2s ease;
              transition: all 0.2s ease;
              width: 292px;
              font-size: 16px;
              text-align: center;
              a {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                padding: 0 5px;
              }
              .active {
                color: #ff6700;
              }
            }
            .active {
              z-index: 3;
              border-color: #ff6700;
            }
          }
        }
      }
      .selected-list {
        background: #f9f9fa;
        padding: 30px;
        margin-bottom: 30px;
        ul {
          li {
            list-style: none;
            line-height: 30px;
            color: #616161;
            span {
              float: right;
            }
          }
        }
        .total-price {
          color: #ff6700;
          font-size: 24px;
          padding-top: 20px;
        }
      }
      .btn-box {
        margin: 10px 0 20px 0;
        .sale-btn {
          display: inline-block;
          margin-right: 10px;
          .btn {
            display: inline-block;
            padding: 0;
            margin: 0;
            border: 1px solid #b0b0b0;
            text-align: center;
            color: #b0b0b0;
            cursor: pointer;
            -webkit-transition: all 0.4s;
            transition: all 0.4s;
            width: 298px;
            height: 52px;
            line-height: 52px;
            font-size: 16px;
          }
          .btn-primary {
            background: #ff6700;
            border-color: #ff6700;
            color: #fff;
          }
        }
        .favorite-btn {
          display: inline-block;
          vertical-align: top;
          .btn-gray {
            background: #b0b0b0;
            border-color: #b0b0b0;
            color: #fff;
          }
          .btn-like {
            display: block;
            width: 140px;
            height: 52px;
            line-height: 52px;
            padding: 0;
            margin: 0;
            border: 1px solid #b0b0b0;
            text-align: center;
            cursor: pointer;
            -webkit-transition: all 0.4s;
            transition: all 0.4s;
            font-size: 16px;
            position: relative;
          }
        }
      }
    }
    .img-left {
      width: 50%;
    }
  }
  .product-detail {
    width: 100%;
    padding-bottom: 50px;
    background-color: #f5f5f5;
    color: #333;
    .title {
      padding: 20px 0;
      font-size: 22px;
    }
    .img-box {
      height: 189px;
      img {
        height: 100%;
      }
    }
  }
}
</style>
