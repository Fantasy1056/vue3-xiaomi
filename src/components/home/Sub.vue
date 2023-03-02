<template>
  <div class="home-hero-sub">
    <div class="span4">
      <ul class="home-channel-list">
        <li
          v-for="ch in channelList"
          :key="ch.id"
          @mouseenter="highLightCh(ch.id)"
          @mouseleave="highLightChannel = '0'"
        >
          <a
            href="#"
            class="link"
            :class="highLightChannel === ch.id ? 'high-light-link' : ''"
          >
            <img :src="ch.url" :alt="ch.text" />
            {{ ch.text }}
          </a>
        </li>
      </ul>
    </div>
    <div class="span16">
      <ul class="home-hero-promo">
        <li
          v-for="(p, index) in promoList"
          :key="p.id"
          :class="[
            index === 0 ? 'frist' : '',
            highLightPromo === p.id ? 'high-light' : ''
          ]"
          @mouseenter="highLightPro(p.id)"
          @mouseleave="highLightPromo = '0'"
        >
          <a href="#" class="link">
            <img :src="p.url" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import $http from '@/utils/Axios'
import { ref } from 'vue'
interface Promo {
  id: string
  url: string
}
interface ChannelList {
  id: string
  text: string
  url: string
}
const channelList = ref<ChannelList[]>([])
const promoList = ref<Promo[]>([])
const highLightPromo = ref<string>('0')
const highLightChannel = ref<string>('0')

const getChannelList = async () => {
  const { data: res } = await $http.get('/homechannellist')
  channelList.value = res.res
}
getChannelList()
const getPromolList = async () => {
  const { data: res } = await $http.get('/promolist', {
    params: { id: '1', name: 'wp' }
  })
  promoList.value = res.res
}
getPromolList()
const highLightPro = (index: string) => {
  highLightPromo.value = index
}
const highLightCh = (index: string) => {
  highLightChannel.value = index
}
</script>

<style lang="less" scoped>
.home-hero-sub {
  width: 100%;
  height: 170px;
  margin-top: 14px;
  .span4 {
    float: left;
    width: 234px;
    height: 100%;
    background-color: #5f5750;
    .home-channel-list {
      width: 100%;
      height: 100%;
      padding: 3px;
      li {
        position: relative;
        float: left;
        width: 76px;
        height: 82px;
        padding: 0 3px;

        &::before,
        &::after {
          position: absolute;
          content: '';
          top: -1px;
          left: 6px;
          width: 64px;
          height: 1px;
          background: #665e57;
        }
        &::after {
          top: 6px;
          left: 0;
          width: 1px;
          height: 70px;
        }
        .link {
          display: block;
          color: #fff;
          opacity: 0.7;
          text-overflow: ellipsis;
          padding-top: 18px;
          font-size: 14px;
          text-align: center;
          transition: opacity 0.3s linear;
          img {
            display: block;
            margin: 0 auto 4px;
            width: 24px;
            height: 24px;
          }
        }
        .high-light-link {
          opacity: 1;
        }
      }
    }
  }
  .span16 {
    float: left;
    margin-left: 14px;
    height: 100%;
    width: 978px;
    .home-hero-promo {
      width: 100%;
      height: 100%;
      li {
        float: left;
        width: 316px;
        height: 170px;
        margin-left: 14px;
        transition: box-shadow 0.3s linear;
        .link {
          img {
            width: 316px;
            height: 170px;
          }
        }
      }
      .high-light {
        box-shadow: 5px 2px 15px 2px rgba(0, 0, 0, 0.5);
      }
      .frist {
        margin-left: 0;
      }
    }
  }
}
</style>
