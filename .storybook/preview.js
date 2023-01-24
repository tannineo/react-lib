import 'tailwindcss/tailwind.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.start()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark',
  },
  storySort: {
    method: 'alphabetical',
  },
}
