import Mock from 'mockjs'
import topbarList from './data/topbar-list'
import siteUserInfo from './data/site-user-info'
import navlist from './data/navlist'
import swiperlist from './data/swiperlist'
import categoryList from './data/category-list'
import homeChannel from './data/home-channel'
import promoList from './data/promo-list'
Mock.setup({
  timeout: '50-1000'
})

Mock.mock(/\/toplist/, 'get', () => {
  return {
    code: 200,
    res: topbarList
  }
})
Mock.mock(/\/siteuserinfo/, 'get', () => {
  return {
    code: 200,
    res: siteUserInfo
  }
})
Mock.mock(/\/navlist/, 'get', () => {
  return {
    code: 200,
    res: navlist
  }
})
Mock.mock(/\/swiperlist/, 'get', () => {
  return {
    code: 200,
    res: swiperlist
  }
})
Mock.mock(/\/categorylist/, 'get', () => {
  return {
    code: 200,
    res: categoryList
  }
})
Mock.mock(/\/homechannellist/, 'get', () => {
  return {
    code: 200,
    res: homeChannel
  }
})
Mock.mock(/\/promolist/, 'get', () => {
  return {
    code: 200,
    res: promoList
  }
})
