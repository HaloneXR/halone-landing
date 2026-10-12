<script setup lang="ts">
useHead({ title: 'Privacy Policy - Halone XR' })

const lastUpdated = 'October 12, 2026'
</script>
<template>
  <v-container class="privacy">
    <h1 class="text-headline-large">Privacy Policy</h1>
    <p class="text-medium-emphasis">Last updated: {{ lastUpdated }}</p>

    <p>
      Halone is an open source XR environment for Android. It runs entirely on
      your device: there are no accounts, and Halone does not operate any server
      that receives your data. This policy explains what that means in practice.
    </p>

    <h2 class="text-title-large">Data we collect</h2>

    <p>
      None. Halone does not collect, store on our side, sell or share any
      personal information. We have no analytics, no advertising SDKs and no
      tracking.
    </p>

    <h2 class="text-title-large">Data stored on your device</h2>

    <p>
      Settings, browser history, bookmarks, tabs, downloads, installed apps and
      recordings are kept only in the app's storage on your device. They never
      leave it unless you share them yourself. Uninstalling Halone or clearing
      its data removes them.
    </p>

    <h2 class="text-title-large">Permissions</h2>
    <p>Halone asks for Android permissions only to provide its features:</p>

    <ul>
      <li>
        <strong>Internet:</strong> used by the built-in web browser and web apps
        you open.
      </li>

      <li>
        <strong>Storage / all files access:</strong> to open and play your local
        images and videos, and to save downloads.
      </li>

      <li>
        <strong>Microphone and screen capture:</strong> only when you start a
        recording of the virtual environment, to capture its sound. Recordings
        are saved on your device.
      </li>

      <li>
        <strong>Location:</strong> only when a website you visit asks for it,
        and only if you allow it.
      </li>

      <li>
        <strong>Notifications and foreground service:</strong> to keep the
        session running while your glasses are connected.
      </li>
    </ul>

    <h2 class="text-title-large">Third-party services</h2>

    <p>
      Halone itself does not send your data anywhere, but some features connect
      to third parties when you use them:
    </p>

    <ul>
      <li>
        Websites you visit in the browser, and the search engine you choose
        (DuckDuckGo by default, or Google or Bing), receive your requests under
        their own privacy policies.
      </li>

      <li>
        The uBlock Origin extension is downloaded from addons.mozilla.org and
        updates its filter lists from their usual sources.
      </li>

      <li>
        Apps you install, including third-party Halone apps and the Android
        Integration Plugin, are governed by their own developers' policies.
      </li>

      <li>
        Google Play may collect data as described in Google's privacy policy
        when you download Halone from the Play Store.
      </li>
    </ul>

    <h2 class="text-title-large">Diagnostic data (optional)</h2>

    <p>
      A future version of Halone may offer anonymous crash reports to help us
      fix bugs. This will be off by default and only enabled if you opt in from
      the app's settings. Crash reports would contain technical information such
      as the app version, device model, Android version and the error stack
      trace, and would not include your name, accounts, browsing data or files.
      You can turn it off at any time. This policy will be updated before that
      feature ships.
    </p>

    <h2 class="text-title-large">Children</h2>

    <p>
      Halone does not knowingly collect any data from anyone, including children
      under 13.
    </p>

    <h2 class="text-title-large">Changes to this policy</h2>

    <p>
      If this policy changes, the updated version will be published on this page
      with a new "Last updated" date.
    </p>

    <h2 class="text-title-large">Contact</h2>

    <p>
      Questions about this policy can be sent by opening an issue on
      <a href="https://github.com/HaloneXR/halone/issues">GitHub</a> or on our
      <a href="https://discord.gg/eYgWPNyWbf">Discord server</a>.
    </p>
  </v-container>
</template>

<style scoped>
.privacy {
  max-width: 800px;
}

h2 {
  margin-top: 32px;
  margin-bottom: 8px;
}

p,
ul {
  margin-bottom: 12px;
}

ul {
  padding-left: 24px;
}
</style>
