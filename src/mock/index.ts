import Mock from 'mockjs'
import topbarList from './data/topbar-list'
import siteUserInfo from './data/site-user-info'
import navlist from './data/navlist'
import swiperlist from './data/swiperlist'
import categoryList from './data/category-list'
import homeChannel from './data/home-channel'
import promoList from './data/promo-list'
import brickPromoList from './data/brick-promo-list'
import goodsList from './data/goods-list'
import serviceLinks from './data/service-links'
import drawerItemList from './data/drawer-item-list'
import category from './data/category'
import goodsDetail from './data/goods-detail'
Mock.setup({
  timeout: '50-1000'
})
// 头部黑色背景navbar
Mock.mock(/\/toplist/, 'get', () => {
  return {
    code: 200,
    res: topbarList
  }
})
// 头部黑色背景用户信息
Mock.mock(/\/siteuserinfo/, 'get', () => {
  return {
    code: 200,
    res: siteUserInfo
  }
})
// 头部主体navbar
Mock.mock(/\/navlist/, 'get', () => {
  return {
    code: 200,
    res: navlist
  }
})
// 主页轮播图
Mock.mock(/\/swiperlist/, 'get', () => {
  return {
    code: 200,
    res: swiperlist
  }
})
// 侧边栏商品分类请
Mock.mock(/\/categorylist/, 'get', () => {
  return {
    code: 200,
    res: categoryList
  }
})
// 侧边栏下方频道
Mock.mock(/\/homechannellist/, 'get', () => {
  return {
    code: 200,
    res: homeChannel
  }
})
// 轮播图下方横向商品数据
Mock.mock(/\/promolist/, 'get', () => {
  return {
    code: 200,
    res: promoList
  }
})
// 商品区域,侧边展示的图片
Mock.mock(/\/brickpromolist/, 'get', ({ url }) => {
  // 获得query参数
  const queryStr = url.split('?')[1]
  const queryParams = new URLSearchParams(queryStr)
  const classify: string = queryParams.get('classify') as string
  // 根据query参数里的classify返回对应的数据,classify是商品组件里的type属性
  return {
    code: 200,
    res: brickPromoList[classify]
  }
})
// 商品区域,主体展示的商品数据
Mock.mock(/\/goodslist/, 'get', ({ url }) => {
  // 获得query参数
  const queryStr = url.split('?')[1]
  const queryParams = new URLSearchParams(queryStr)
  const classify: string = queryParams.get('classify') as string
  // 根据query参数里的classify返回对应的数据,classify是商品组件里的type属性
  return {
    code: 200,
    res: goodsList[classify]
  }
})
// footer组件的服务分类数据
Mock.mock(/\/servicelist/, 'get', () => {
  return {
    code: 200,
    res: serviceLinks
  }
})
// 抽屉组件要展示的数据
Mock.mock(/\/draweritemlist/, 'get', () => {
  return {
    code: 200,
    res: drawerItemList
  }
})
// 侧边栏抽屉的商品数据
Mock.mock(/\/category/, 'get', () => {
  return {
    code: 200,
    res: category
  }
})
// 商品详情数据
Mock.mock(/\/goodsdetail/, 'get', ({ url }) => {
  // 获得query参数
  const queryStr = url.split('?')[1]
  const queryParams = new URLSearchParams(queryStr)
  const id: string = queryParams.get('id') as string
  // 根据query参数里的商品id返回对应的数据
  return {
    code: 200,
    res: goodsDetail.find(item => item.id === id)
  }
})
