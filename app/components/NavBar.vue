<script setup lang="ts">
import logo from '~/assets/images/halone_fullcolor.svg'
</script>
<template>
  <v-app-bar>
    <router-link to="/" class="d-flex text-decoration-none align-center">
      <v-avatar :image="logo" class="ml-4"></v-avatar>
      <v-app-bar-title class="ml-2 text-white">Halone XR</v-app-bar-title>
    </router-link>
    <v-spacer />
    <v-btn class="hidden-sm-and-down mr-2" href="https://halone.dev">
      Dev Docs
      <v-icon end>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn
      class="hidden-sm-and-down mr-2"
      icon="fa:fa-brands fa-github"
      href="https://github.com/HaloneXR"
    />
    <v-btn
      class="hidden-sm-and-down mr-2"
      icon="fa:fa-brands fa-discord"
      href="https://discord.gg/eYgWPNyWbf"
    />
    <v-btn color="primary" variant="flat" class="mr-2" to="/download">
      Download Alpha
      <v-icon end> mdi-download </v-icon>
    </v-btn>
    <template v-slot:append>
      <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
</template>
