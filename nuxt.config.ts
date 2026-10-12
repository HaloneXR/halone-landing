import { md3 } from 'vuetify/blueprints'
import { vuetifyThemeFromColor } from './app/lib/vuetifyM3ThemeGenerator'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-21',
  devtools: { enabled: true },

  // ssr: false,
  modules: ['@nuxt/fonts', 'vuetify-nuxt-module', '@nuxt/eslint'],

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/layers.css' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css'
        }
      ]
    }
  },

  vuetify: {
    moduleOptions: {
      prefixComposables: ['useLayout'],
      styles: { configFile: 'assets/styles/settings.scss' },

      ssrClientHints: {
        reloadOnFirstRequest: false,
        viewportSize: true,
        prefersColorScheme: true,
        prefersReducedMotion: true,

        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false
        }
      }
    },
    vuetifyOptions: {
      blueprint: md3,
      theme: {
        // default 'system' requires `ssr: false` to avoid hydration warnings
        defaultTheme: 'dark',

        themes: {
          dark: vuetifyThemeFromColor(0xff00feff, true, 0.3),
          light: vuetifyThemeFromColor(0xff00feff, false, 0.3)
        }
      },
      icons: {
        defaultSet: 'mdi',
        sets: ['mdi', 'fa']
      }
    }
  },

  eslint: {
    config: {
      import: {
        package: 'eslint-plugin-import-lite'
      }
    }
  }
})
