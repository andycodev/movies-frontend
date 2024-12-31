<template>
  <v-layout>
    <v-app-bar color="black" app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Películas</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :to="{ path: '/admin' }" color="amber" variant="text">
        Gestionar películas
      </v-btn>

<!--      <v-btn icon="mdi-magnify"></v-btn>-->
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
//
</script>
