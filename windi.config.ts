import iconPlugin from '@windicss/plugin-icons'
import { dirname, join, resolve } from 'path'
import defaultConfig from 'windicss/defaultConfig'
import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

const basePath = dirname(resolve(__dirname))

// sorting classnames is handled by vscode extension:
// https://windicss.org/editors/vscode.html

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
    exclude: [join(basePath, '/node_modules/**/*')],
    include: [join(basePath, '/src/**/*.{vue,html,js,ts,jsx,tsx}')],
  },
})
