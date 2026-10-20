<script setup lang="ts">
useHead({ title: 'FAQ - Halone XR' })
</script>
<template>
  <v-container class="faq">
    <h1 class="text-headline-large">Frequently asked questions</h1>

    <h2 id="refresh-rate" class="text-title-large">
      Why does Halone draw only 60 frames a second at a higher refresh rate?
    </h2>

    <p>
      Android draws for every screen in step with the phone's own screen. Many
      phones let their screen drop to 60 Hz when nothing on it is moving, and
      while you wear the glasses the phone mostly shows Halone's touchpad,
      which rarely moves. So glasses set to 90 or 120 Hz still get only 60
      frames a second. Settings &gt; Display in Halone warns you when this
      happens.
    </p>

    <p>
      Some refresh rates can't be matched at all. A phone's screen refreshes
      at a fixed set of rates, often 120 Hz and its divisions, such as 60 Hz.
      A glasses rate outside that set, like 90 Hz on many phones, may look
      uneven however fast Halone draws. Halone marks those rates "may stutter".
      60 Hz and the phone's top rate are the smooth choices.
    </p>

    <p>
      Keeping the phone's screen at its top refresh rate fixes the 60 frames a
      second limit. There are two ways to do it.
    </p>

    <h3 class="text-title-medium">Automatic, with the Android Integration plugin</h3>

    <p>
      The Android Integration plugin already uses Shizuku, which can change
      this setting for you. With the plugin installed and set up:
    </p>

    <ol>
      <li>In Halone, open Settings &gt; Plugins.</li>
      <li>Select the cog beside Android Integration.</li>
      <li>Turn on <strong>Keep the phone's screen at its top refresh rate</strong>.</li>
    </ol>

    <p>
      The plugin sets it when the environment starts and puts it back as it
      was when the environment stops, so the phone doesn't stay at its top
      rate, and use more battery, when you aren't wearing the glasses.
    </p>

    <h3 class="text-title-medium">Manually, with adb</h3>

    <p>
      With the phone connected to a computer by adb, check whether the phone
      already has a value of its own, and note it:
    </p>

    <pre><code>adb shell settings get system min_refresh_rate</code></pre>

    <p>Then set the phone's top refresh rate, for example 120 Hz:</p>

    <pre><code>adb shell settings put system min_refresh_rate 120</code></pre>

    <p>
      This lasts until you change it back, even when you aren't using Halone,
      and keeps the phone's screen at that rate all the time, which uses more
      battery. To undo it, delete the setting:
    </p>

    <pre><code>adb shell settings delete system min_refresh_rate</code></pre>

    <p>
      If the first command printed a number rather than <code>null</code>, put
      that number back instead:
    </p>

    <pre><code>adb shell settings put system min_refresh_rate &lt;the number it printed&gt;</code></pre>
  </v-container>
</template>

<style scoped>
.faq {
  max-width: 800px;
}

h2 {
  margin-top: 32px;
  margin-bottom: 8px;
}

h3 {
  margin-top: 24px;
  margin-bottom: 8px;
}

p,
ol {
  margin-bottom: 12px;
}

ol {
  padding-left: 24px;
}

pre {
  margin-bottom: 12px;
  padding: 12px 16px;
  overflow-x: auto;
  border-radius: 8px;
  background: rgba(var(--v-theme-on-surface), 0.06);
}
</style>
