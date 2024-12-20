<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
    <!-- Barra superior -->
    <div class="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <!-- Título -->
      <h1 class="text-xl md:text-3xl font-bold">Películas</h1>
      <!-- Toggle Dark Mode -->
      <div class="flex items-center">
        <label class="relative inline-flex items-center cursor-pointer">
          <input
              type="checkbox"
              class="sr-only peer"
              :checked="isDarkMode"
              @change="toggleDarkMode"
          />
          <div class="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer-checked:bg-blue-400"></div>
          <div class="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
        </label>
      </div>
    </div>

    <!-- Cards grid -->
    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
      <div
          v-for="movie in movies"
          :key="movie.id"
          class="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between"
      >
        <!-- Imagen y detalles -->
        <div>
          <img
              :src="movie.image"
              :alt="movie.title"
              class="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 class="text-lg font-semibold mb-2">{{ movie.title }}</h2>
          <p class="text-sm mb-2">{{ movie.description }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Año: {{ movie.year }}</p>
        </div>

        <!-- Botones de acción -->
        <div class="flex justify-end gap-2 mt-4">
          <!-- Botón Editar -->
          <button
              @click="editMovie(movie.id)"
              class="relative group p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
              aria-label="Editar"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
              <path d="M15.232 4.232a2.5 2.5 0 00-3.535 0L4 11.93V15h3.07l7.697-7.697a2.5 2.5 0 000-3.535z" />
              <path d="M4 13.5V17h3.5l8.486-8.486a1.5 1.5 0 10-2.122-2.122L4 13.5z" />
            </svg>
            <!-- Tooltip -->
            <span
                class="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition"
            >
              Editar
            </span>
          </button>

          <!-- Botón Eliminar -->
          <button
              @click="deleteMovie(movie.id)"
              class="relative group p-2 rounded-full bg-red-100 hover:bg-red-200 transition"
              aria-label="Eliminar"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-1 14H6L5 7m5-4h4m-4 0V3a2 2 0 012-2h2a2 2 0 012 2v1m-4 0h4M4 7h16"
              />
            </svg>
            <!-- Tooltip -->
            <span
                class="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition"
            >
              Eliminar
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>





<script setup lang="ts">
import {onMounted, ref} from 'vue';

const movies = ref([
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
    year: 2010,
    image: 'https://picsum.photos/1920/1080?random=1',
  },
  {
    id: 2,
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
    year: 2014,
    image: 'https://picsum.photos/1920/1080?random=2',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    description: 'Batman raises the stakes in his war on crime.',
    year: 2008,
    image: 'https://picsum.photos/1920/1080?random=3',
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, and a pair of robbers intertwine.',
    year: 1994,
    image: 'https://picsum.photos/1920/1080?random=4',
  },
  {
    id: 5,
    title: 'The Matrix',
    description: 'A computer hacker learns about the true nature of reality.',
    year: 1999,
    image: 'https://picsum.photos/1920/1080?random=5',
  },
  {
    id: 6,
    title: 'Fight Club',
    description: 'An insomniac forms an underground fight club.',
    year: 1999,
    image: 'https://picsum.photos/1920/1080?random=6',
  },
  {
    id: 7,
    title: 'Forrest Gump',
    description: 'Forrest Gump witnesses defining historical events.',
    year: 1994,
    image: 'https://picsum.photos/1920/1080?random=7',
  },
  {
    id: 8,
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control.',
    year: 1972,
    image: 'https://picsum.photos/1920/1080?random=8',
  }
]);

// Hacer que el modo oscuro sea el predeterminado
const isDarkMode = ref(true);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};

// Aplicar el modo oscuro al montar el componente
onMounted(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  }
});
</script>

<style scoped>
</style>
