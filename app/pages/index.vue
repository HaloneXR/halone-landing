<template>
  <div class="hero d-flex align-center">
    <div class="content pa-8">
      <div class="headline-text mb-16 pb-16">
        <h1 class="text-headline-large">
          An immersive XR glasses environment for Android
        </h1>
        <h2 class="text-headline-small">
          Turn your phone and glasses into a portable productivity environment
        </h2>
        <div class="d-flex mt-4 pb-16 align-center ga-2">
          <v-btn size="x-large" to="/download">
            <v-icon start>mdi-download</v-icon>
            Download Alpha
          </v-btn>
          <v-btn
            href="https://youtu.be/CTkCR-HgtSo"
            variant="text"
            target="_blank"
          >
            See it in action
            <v-icon end>mdi-play-box</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
  <v-container class="mt-8">
    <v-row gap="16" class="text-center">
      <v-col cols="12" md="3">
        <v-icon size="96">mdi-rotate-360</v-icon>
        <div class="text-title-large">3DoF virtual environment</div>
        <div>Place virtual windows anywhere you want</div>
      </v-col>
      <v-col cols="12" md="3">
        <v-icon size="96">mdi-web</v-icon>
        <div class="text-title-large">Fully featured web browser</div>
        <div>
          Tabs, bookmarks, downloads and uBlock origin built-in for a
          desktop-class browsing experience
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <v-icon size="96">mdi-multimedia</v-icon>
        <div class="text-title-large">Media Playback</div>
        <div>
          Play 3D or 360 images and videos locally stored in your device
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <v-icon size="96">mdi-keyboard</v-icon>
        <div class="text-title-large">Peripheral Support</div>
        <div>
          Connect a physical keyboard and mouse and use it like a desktop
        </div>
      </v-col>

      <v-col cols="12" md="3">
        <v-icon size="96">mdi-apps</v-icon>
        <div class="text-title-large">Third Party Apps</div>
        <div>
          Install any PWA from the browser, or build your own using the Web or
          Native SDKs
        </div>
      </v-col>

      <v-col cols="12" md="3">
        <v-icon size="96">fa:fa-brands fa-android</v-icon>
        <div class="text-title-large">Android Apps</div>
        <div>
          Run apps from your phone in the virtual environment, no root required
          (separate plugin download)
        </div>
      </v-col>

      <v-col cols="12" md="3">
        <v-icon size="96">fa:fa-brands fa-osi</v-icon>
        <div class="text-title-large">Open Source</div>
        <div>
          Everything from the SDK to the virtual environment available on
          <a
            class="text-accent"
            target="_blank"
            href="https://github.com/HaloneXR"
            >GitHub</a
          >
        </div>
      </v-col>

      <v-col cols="12" md="3">
        <v-icon size="96">mdi-account-cancel</v-icon>
        <div class="text-title-large">No account or setup required</div>
        <div>
          Everything runs locally on your phone, just install the app, connect
          the glasses and tap start
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="mt-8">
    <v-row gap="16">
      <v-col cols="12" md="6">
        <h1 class="text-headline-medium">Supported Glasses</h1>
        <div class="d-flex ga-2 align-center mb-2">
          <v-tooltip text="Verified and fully supported" location="top">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="success">mdi-check-circle</v-icon>
            </template>
          </v-tooltip>
          XREAL Air
        </div>
        <div class="d-flex ga-2 align-center mb-2">
          <v-tooltip text="Verified and fully supported" location="top">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="success">mdi-check-circle</v-icon>
            </template>
          </v-tooltip>
          XREAL Air 2
        </div>
        <div class="d-flex ga-2 align-center mb-2">
          <v-tooltip text="Verified and fully supported" location="top">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="success">mdi-check-circle</v-icon>
            </template>
          </v-tooltip>
          XREAL Air 2 Pro
        </div>
        <div class="d-flex ga-2 align-center mb-2">
          <v-tooltip text="Untested" location="top">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="warning">mdi-alert</v-icon>
            </template>
          </v-tooltip>
          XREAL Air 2 Ultra
        </div>
        <div class="mt-2">
          Support for more glasses is planned, including non-XREAL hardware.
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="text-headline-medium">System Requirements</h1>
        <div class="d-flex align-center ga-3">
          <v-icon size="20">fa:fa-brands fa-android</v-icon>
          Android 10 or newer
        </div>

        <div class="d-flex align-center ga-2 mt-2">
          <v-icon>mdi-usb-c-port</v-icon>
          USB-C port with display output
        </div>

        <div class="d-flex align-center ga-2 mt-2">
          <v-icon>mdi-memory</v-icon>
          At least 8GB of RAM, 12GB recommended
        </div>

        <div class="d-flex align-center ga-2 mt-2">
          <v-icon>mdi-apps</v-icon>
          For the Android apps plugin, Shizuku or Sui is required
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="my-8">
    <h1 class="text-headline-medium">Seeking contributors</h1>
    <div>
      Everyone is welcome. If you want to help with development, have
      unsupported hardware that you'd like to see supported, want to develop
      apps for the platform or just have feedback or ideas, feel free to join
      the official Discord server.
    </div>
    <v-btn
      color="#5865f2"
      size="large"
      class="mt-4"
      href="https://discord.gg/eYgWPNyWbf"
      target="_blank"
    >
      <v-icon start>fa:fa-brands fa-discord</v-icon>
      Join the Discord
    </v-btn>
  </v-container>
</template>
<style scoped lang="scss">
.hero {
  background:
    linear-gradient(to right, black, transparent),
    url('~/assets/images/halone_banner.webp') center no-repeat;
  background-size: auto 100%;
  background-position: right;
  height: calc(100vh - 64px);

  h1,
  h2 {
    text-shadow: 0 0 10px black;
  }
}

@media screen and (orientation: portrait) {
  .hero {
    background-position: center;
  }
}
</style>
