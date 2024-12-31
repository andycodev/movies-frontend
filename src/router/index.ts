import { createWebHistory, createRouter } from 'vue-router';
import AdminLayout from '@/layouts/AdminLayout.vue';
import MoviesLayout from '@/layouts/MoviesLayout.vue';
import MoviesListPage from '@/pages/movies/movies-list/MoviesListPage.vue';
import MoviesAdminPage from '@/pages/movies/movies-admin/MoviesAdminPage.vue';

const routes = [
  // Ruta para la lista de películas
  {
    path: '/movies',
    component: MoviesLayout,
    children: [
      { path: '', component: MoviesListPage }, // Renderiza MoviesListPage directamente en /movies
    ],
  },

  // Ruta para la gestión de películas
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: '', component: MoviesAdminPage }, // Renderiza MoviesAdminPage directamente en /admin
    ],
  },

  // Redirige cualquier ruta no definida a /movies
  { path: '/:pathMatch(.*)*', redirect: '/movies' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
