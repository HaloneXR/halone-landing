import {
  Hct,
  SchemeTonalSpot,
  MaterialDynamicColors,
  DynamicScheme,
  DynamicColor,
  argbFromHex,
  hexFromArgb,
  sourceColorFromImage
} from '@material/material-color-utilities'
import kebabCase from 'just-kebab-case'

export function getDynamicColors(scheme: DynamicScheme) {
  const tokens = Object.keys(
    MaterialDynamicColors
  ) as (keyof typeof MaterialDynamicColors)[]
  return Object.fromEntries(
    tokens
      .map((token) => {
        const key = kebabCase(token)
        const value = MaterialDynamicColors[token] as DynamicColor
        if (!value.getArgb) return [key, null]
        return [key, hexFromArgb(value.getArgb(scheme))]
      })
      .filter(([, value]) => value !== null)
  )
}

export function vuetifyThemeFromColor(
  sourceColor: number,
  dark: boolean,
  contrast = 0.3,
  variables: Record<string, string | number> = {}
) {
  const source = Hct.fromInt(sourceColor)
  const scheme = new SchemeTonalSpot(source, dark, contrast)
  const colors = getDynamicColors(scheme)
  return {
    dark,
    colors: {
      ...colors,
      ...(dark
        ? {
            background: '#000000',
            surface: '#000000',
            'surface-variant': '#1e1e1e',
            accent: `#${sourceColor.toString(16).slice(2)}`
          }
        : {
            background: '#f9fafb',
            surface: '#f9fafb',
            'surface-variant': '#f0f0f0',
            accent: `#${sourceColor.toString(16).slice(2)}`
          })
    },
    variables: dark
      ? {
          'border-color': '#FFFFFF',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 1,
          'medium-emphasis-opacity': 0.7,
          'disabled-opacity': 0.5,
          'idle-opacity': 0.1,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'activated-opacity': 0.12,
          'pressed-opacity': 0.16,
          'dragged-opacity': 0.08,
          'theme-kbd': '#424242',
          'theme-on-kbd': '#FFFFFF',
          'theme-code': '#343434',
          'theme-on-code': '#CCCCCC',
          ...variables
        }
      : {
          'border-color': '#000000',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 0.87,
          'medium-emphasis-opacity': 0.6,
          'disabled-opacity': 0.38,
          'idle-opacity': 0.04,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'activated-opacity': 0.12,
          'pressed-opacity': 0.12,
          'dragged-opacity': 0.08,
          'theme-kbd': '#212529',
          'theme-on-kbd': '#FFFFFF',
          'theme-code': '#F5F5F5',
          'theme-on-code': '#000000',
          ...variables
        }
  }
}

export function vuetifyThemeFromHex(
  hex: string,
  dark: boolean,
  contrast = 0.3,
  variables: Record<string, string | number> = {}
) {
  return vuetifyThemeFromColor(argbFromHex(hex), dark, contrast, variables)
}

export async function vuetifyThemeFromImage(
  image: HTMLImageElement,
  dark: boolean,
  contrast = 0.3,
  variables: Record<string, string | number> = {}
) {
  const color = await sourceColorFromImage(image)
  return vuetifyThemeFromColor(color, dark, contrast, variables)
}
