<template>
  <v-carousel
    :continuous="true"
    delimiter-icon="mdi-square"
    height="auto"
    cycle
    progress="white"
    hide-delimiters
    show-arrows="hover"
    class="mb-4"
  >
    <v-carousel-item v-for="movie in moviesCarousel" :key="movie.movieId">
      <v-card class="pa-0 position-relative" color="#952175">
        <!-- Imagen de fondo con overlay -->
        <v-img
          :src="'https://picsum.photos/1920/1080?random=' + movie.movieId"
          height="100%"
          class="position-absolute top-0 left-0 right-0 bottom-0"
          :style="{ opacity: 0.7 }"
          cover
        ></v-img>

        <!-- Overlay oscuro -->
        <div class="position-absolute top-0 left-0 right-0 bottom-0" style="background: rgba(0, 0, 0, 0.5);"></div>

        <!-- Contenido de la tarjeta -->
        <div class="d-flex flex-column justify-space-between text-white position-relative z-index-1 pa-3">
          <v-card-title class="text-h5">
            {{ movie.title }}
          </v-card-title>

          <v-card-subtitle>
            <v-chip color="amber" variant="flat">
              {{ movie.year }}
            </v-chip>
          </v-card-subtitle>

          <v-card-text>
            <p class="text-body-2">
              {{ movie.description }}
            </p>
          </v-card-text>

          <v-card-actions>
            <v-btn
              class="ms-2"
              icon="mdi-play"
              variant="text"
            ></v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-carousel-item>
  </v-carousel>

  <v-row dense>
    <span v-if="isLoadingMovies">Cargando películas de movies-backend ...</span>
    <template v-else>
      <v-col v-for="movie in movies" :key="movie.movieId" cols="12" md="3">
        <v-card class="pa-0 position-relative" color="#952175">
          <!-- Imagen de fondo con overlay -->
          <v-img
            :src="'https://picsum.photos/1920/1080?random=' + movie.movieId"
            height="100%"
            class="position-absolute top-0 left-0 right-0 bottom-0"
            :style="{ opacity: 0.7 }"
            cover
          ></v-img>

          <!-- Overlay oscuro -->
          <div class="position-absolute top-0 left-0 right-0 bottom-0" style="background: rgba(0, 0, 0, 0.5);"></div>

          <!-- Contenido de la tarjeta -->
          <div class="d-flex flex-column justify-space-between text-white position-relative z-index-1 pa-3">
            <v-card-title class="text-h5">
              {{ movie.title }}
            </v-card-title>

            <v-card-subtitle>
              <v-chip color="amber" variant="flat">
                {{ movie.year }}
              </v-chip>
            </v-card-subtitle>

            <v-card-text>
              <p class="text-body-2">
                {{ movie.description }}
              </p>
            </v-card-text>

            <v-card-actions>
              <v-btn
                class="ms-2"
                icon="mdi-play"
                variant="text"
              ></v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<script setup lang="ts">
import useMoviesListPage from "@/pages/movies/movies-list/useMoviesListPage";

const {moviesCarousel, useGetMovies} = useMoviesListPage();

const {
  data: movies,
  isLoading: isLoadingMovies,
  refetch: refetchMovies,
  isRefetching: isRefetchingMovies
} = useGetMovies();

</script>

<style scoped></style>
