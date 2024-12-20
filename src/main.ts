import './assets/tailwind.css';
import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router';

//createApp(App).mount('#app')
const app = createApp(App);
app.use(router); // Usa el router en tu aplicación
app.mount('#app');