import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/mock/index.ts'

createApp(App).use(router).mount('#app')
