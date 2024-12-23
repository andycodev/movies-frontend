// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Vue router
import router from './router'

// Composables
import { createApp } from 'vue'

// Tanstack vuequery
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

// Usar el router
app.use(router)

// Registrar otros plugins
registerPlugins(app)

// Usar VueQuery
app.use(VueQueryPlugin)

// Montar la aplicación en el contenedor con id 'app'
app.mount('#app')
