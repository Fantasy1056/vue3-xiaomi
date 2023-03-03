import axios from 'axios'
// import { ElLoading } from 'element-plus'
// let instance: any = null
// axios.interceptors.request.use(config => {
//   instance = ElLoading.service({
//     target: document.querySelector('.site-header-drawer') as HTMLElement,
//     fullscreen: true
//   })
//   return config
// })

// axios.interceptors.response.use(config => {
//   instance.close()
//   return config
// })
const $http = axios.create()
export default $http
