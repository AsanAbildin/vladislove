import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.css'
import AppButton from '@/components/AppButton.vue'
import router from '@/router'

createApp(App)
.component('app-button', AppButton)
.use(router)
.mount('#app')
