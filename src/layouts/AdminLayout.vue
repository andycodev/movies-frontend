<template>
  <v-layout>
    <v-app-bar color="black" app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="d-none d-sm-block">Admin</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :to="{ path: '/movies' }" color="amber" variant="text">
        Regresar a películas
      </v-btn>

<!--      yar-->
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
//
</script>
