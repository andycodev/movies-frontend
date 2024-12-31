<template>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-video"></v-icon> &nbsp;
      Gestión de películas

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      v-model:search="search"
      :filter-keys="['title']"
      :items="movies"
    >

      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.movieId }}</td>
          <td class="text-truncate">
            <span class="ms-2 font-weight-medium">{{ item.title }}</span>
          </td>
          <td>{{ item.description }}</td>
          <td>{{ item.year }}</td>
          <td>
            <v-img
              :src="item.imageUrl"
              height="64"
              cover
            ></v-img>
          </td>
          <td class="text-center">
            <v-btn v-tooltip:bottom="'Acciones para la película'" size="x-small" icon variant="tonal" class="ms-2"
                   color="primary">
              <v-icon icon="mdi-menu-down"></v-icon>
              <v-menu activator="parent" location="bottom end"
                      transition="fade-transition">
                <v-list density="compact" min-width="250" rounded="lg" slim>
                  <v-list-item prepend-icon="mdi-circle-edit-outline"
                               class="text-primary"
                               title="Editar película" link>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-delete-outline"
                               class="text-pink-accent-3"
                               title="Eliminar película" link @click.prevent="onDelete(item.movieId)">
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-btn>
          </td>
        </tr>
      </template>

    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import useMoviesAdminPage from "./useMoviesAdminPage";

const {search, headers, useGetMovies, onDelete} = useMoviesAdminPage();

const {data: movies} = useGetMovies();

</script>

<style scoped>

</style>
