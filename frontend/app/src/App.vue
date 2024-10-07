<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title> Wordbook </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
    <v-footer color="primary" app> (c) kuro </v-footer>
  </v-app>
</template>
