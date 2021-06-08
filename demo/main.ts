import { createApp } from 'vue'
import { HakoPlugin } from '../src/main'
import 'virtual:windi.css'
import App from './App.vue'

createApp(App)
  .use(HakoPlugin)
  .mount('#app')
