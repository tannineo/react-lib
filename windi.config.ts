import iconPlugin from '@windicss/plugin-icons'
import { join, resolve } from 'path'
import defaultConfig from 'windicss/defaultConfig'
import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

// sorting classnames is handled by vscode extension:
// https://windicss.org/editors/vscode.html

export default defineConfig({
  darkMode: 'class',
  content: [
    './*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './.storybook/*.{js.ts}',
  ],
  attributify: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultConfig.theme.fontFamily.sans],
      },
      colors: {},
      flexGrow: {
        '2': 2,
      },
    },
  },
  plugins: [formsPlugin, iconPlugin],

  extract: {
    exclude: [join(__dirname, '/node_modules/**/*')],
    include: [
      join(__dirname, '/src/**/*.{vue,html,js,ts,jsx,tsx}'),
      join(__dirname, '/.storybook/**/*.{vue,html,js,ts,jsx,tsx}'),
    ],
  },
})
