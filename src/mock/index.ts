import Mock from 'mockjs'
import topbarList from './data/topbar-list'
import siteUserInfo from './data/site-user-info'
import navlist from './data/navlist'
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
