import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '../src/styles/main.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light',
    current: 'light',
    stylePreview: true,
  },
}
