import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import pinia from './stores'

import App from './App.vue'
import router from './router'
import Shop from './Shop.vue'

const app = createApp(Shop)

// app.use(createPinia())
app.use(pinia)
app.use(router)

app.mount('#app')
