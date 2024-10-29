import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // korrekt sökväg om `router/index.js` existerar

createApp(App).use(router).mount('#app')
