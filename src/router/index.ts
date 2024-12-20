import { createRouter, createWebHistory } from 'vue-router';
import MoviesPage from "@/pages/movies/MoviesPage.vue";


const routes = [
    {
        path: '/', // Esta es la ruta inicial (homepage)
        name: 'home',
        component: MoviesPage, // Componente que se mostrará en la ruta inicial
    },
];

const router = createRouter({
    history: createWebHistory(), // Usa el modo de historial HTML5
    routes,
});

export default router;