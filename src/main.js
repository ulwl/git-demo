// // 创建 createApp 组件
// import { createApp } from 'vue'
// // 引入 cratePinia 组件
// import { createPinia } from 'pinia'
// // 引入 App 组件
// import App from './App.vue'
// // 引入 css 基础样式
// import './assets/main.css'
// // 创建 app 实例
// const app = createApp(App)
// // 使用 cratePinia 实例
// app.use(createPinia())

// // 挂载到 #app
// app.mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app');