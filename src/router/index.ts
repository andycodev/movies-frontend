import { createWebHistory, createRouter } from 'vue-router'
import MoviesListPage from '@/pages/movies/movies-list/MoviesListPage.vue'

const routes = [
  //{ path: '/', redirect: '/movies-list' }, // Redirige la ruta raíz a /movies-list
  { path: '/movies-list', component: MoviesListPage },
  { path: '/:pathMatch(.*)*', redirect: '/' } // Redirige cualquier ruta no definida a /movies-list
]

const router = createRouter({
  history: createWebHistory(), // Usa createWebHistory para manejar la URL en el navegador
  routes,
})

export default router
