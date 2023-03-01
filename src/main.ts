import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/mock/index.ts'
import '@/css/index.css'
import { ElInput } from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElInput)
app.use(router).mount('#app')
