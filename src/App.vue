<template>
  <RouterView />

  
  <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Rafael França</strong>
    </div>
  </v-footer>
  
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
