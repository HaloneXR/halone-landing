<script setup lang="ts">
import logo from '~/assets/images/halone_fullcolor.svg'
</script>
<template>
  <v-container>
    <h1 class="text-title-large">Main Downloads</h1>
    <v-card variant="outlined" class="d-flex align-center pa-4 ga-4">
      <v-avatar :image="logo" size="96" />
      <div>
        <v-card-title>Halone</v-card-title>
        <v-card-text>
          <div class="mb-2">
            The main application. Includes the XR environment, a web browser and
            some basic apps.
          </div>
          <v-btn
            class="mr-2"
            href="https://github.com/HaloneXR/halone/releases"
          >
            <v-icon start>mdi-download</v-icon>
            Download from GitHub (.apk)
          </v-btn>
          <v-btn disabled color="white">
            <v-icon start>fa:fa-brands fa-google-play</v-icon>
            Play Store coming soon
          </v-btn>
        </v-card-text>
      </div>
    </v-card>

    <v-card variant="outlined" class="d-flex align-center pa-4 ga-4 mt-2">
      <v-avatar color="primary" size="96">
        <v-icon size="64">mdi-apps</v-icon>
      </v-avatar>
      <div>
        <v-card-title>Android Integration Plugin</v-card-title>
        <v-card-text>
          <div class="mb-2">
            Allows running Android apps inside the virtual environment. Shizuku
            or Sui required (remember to enable the plugin in Halone's settings
            app)
          </div>

          <v-btn href="https://github.com/HaloneXR/halone-android-integration">
            <v-icon start>mdi-download</v-icon>
            Download from GitHub (.apk)
          </v-btn>
        </v-card-text>
      </div>
    </v-card>

    <h1 class="text-title-large">Other Downloads</h1>

    <v-card variant="outlined" class="d-flex align-center pa-4 ga-4 mt-2">
      <v-avatar
        color="blue-grey-darken-4"
        size="96"
        rounded="lg"
        style="user-select: none"
      >
        <span class="text-display-large">S</span>
      </v-avatar>
      <div>
        <v-card-title>SSH Client</v-card-title>
        <v-card-text>
          <div class="mb-2">
            An SSH client for Halone (sample app using the Web SDK). Download it
            from Halone's built in browser.
          </div>

          <v-btn href="https://github.com/HaloneXR/halone-ssh/releases">
            <v-icon start>mdi-download</v-icon>
            Download from GitHub (.halone)
          </v-btn>
        </v-card-text>
      </div>
    </v-card>
  </v-container>
</template>
