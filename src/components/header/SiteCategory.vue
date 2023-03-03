<template>
  <div class="site-category">
    <ul class="site-category-list" @mouseleave="cateIndex = -1">
      <li
        class="site-category-item"
        v-for="(item, index) in categoryList"
        :key="item.id"
        @mouseenter="showCateList(index)"
      >
        <a href="" class="link">
          {{ item.text }}
          <el-icon><ArrowRightBold /></el-icon>
        </a>
        <div
          class="category-list"
          v-show="cateIndex === index"
          @mouseleave="cateIndex = -1"
        >
          <ul>
            <li v-for="item in category[index]" :key="item.id">
              <a href="" class="link">
                <img :src="item.picUrl" alt="" />
                <span>{{ item.title }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import $http from '@/utils/Axios'
interface Nav {
  id: string
  text: string
}
interface Category {
  id: string
  title: string
  picUrl: string
}
interface CategoryItem {
  [index: number]: Category
}
const cateIndex = ref<number>(-1)
const categoryList = ref<Nav[]>([])
const category = ref<CategoryItem[]>([])
const getCategoryList = async () => {
  const { data: res } = await $http.get('/categorylist')
  categoryList.value = res.res
}
const getCategory = async () => {
  const { data: res } = await $http.get('/category')
  category.value = res.res
}
const showCateList = (index: number) => {
  cateIndex.value = index
}
getCategoryList()
getCategory()
</script>

<style lang="less" scoped>
.site-category {
  position: absolute;
  top: 88px;
  left: -92px;
  width: 234px;
  height: 460px;
  background: rgba(105, 101, 101, 0.6);
  padding: 20px 0;
  font-size: 14px;
  z-index: 21;
  .site-category-list {
    width: 100%;
    height: 100%;
    .site-category-item {
      width: 100%;
      height: 42px;
      transition: background-color 0.1s linear;
      &:hover {
        background-color: #ff6700;
      }
      .link {
        display: block;
        padding-left: 30px;
        width: 100%;
        height: 42px;
        line-height: 42px;
        color: #fff;
        el-icon {
          float: right;
          padding-top: 12px;
          margin-right: 15px;
          svg {
            display: block;
            width: 15px;
          }
        }
      }
      .category-list {
        position: absolute;
        top: 0px;
        left: 234px;
        height: 460px;
        background-color: #fff;
        border-top: 1px solid #ccc;
        box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
        ul {
          width: 248px;
          height: 460px;
          padding: 2px 0;
          li {
            position: relative;
            float: left;
            width: 248px;
            height: 76px;
            .link {
              display: flex;
              padding: 18px 20px;
              line-height: 40px;
              color: #333;
              height: 76px;
              -webkit-transition: color 0.2s;
              transition: color 0.2s;
              img {
                float: left;
                margin-right: 12px;
                vertical-align: middle;
                width: 40px;
                height: 40px;
              }
              span {
                float: left;
                width: 172px;
                line-height: 40px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              &:hover {
                color: #ff6700;
              }
            }
          }
        }
      }
    }
  }
}
</style>
