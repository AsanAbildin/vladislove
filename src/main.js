import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.css'
import AppButton from '@/components/AppButton.vue'
import router from '@/router'

const app = createApp(App)

app.component('AppButton', AppButton)
app.use(router)
app.mount('#app')
