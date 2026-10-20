<template>
  <v-app>
    <NavBar />
    <v-main style="min-height: calc(100vh - 76px)">
      <nuxt-page />
    </v-main>
    <v-footer border="t-sm">
      <div class="d-flex align-center pa-4 w-100">
        <span>&copy; 2026 TheBITLINK</span>
        <v-spacer />
        <v-btn variant="text" to="/faq">FAQ</v-btn>
        <v-btn variant="text" to="/privacy">Privacy Policy</v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>
