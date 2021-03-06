const path = require('path')
const { mergeConfig } = require('vite')
const VitePluginWindicss = require('vite-plugin-windicss').default

const GH_PAGE_URL = 'https://tannineo.github.io/react-lib/'

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-storysource',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },

  viteFinal: async (config, { configType }) => {
    console.log('configType => ', configType)

    const windiCSSOptions = {
      config: path.join(__dirname, '..', '/windi.config.ts'),
      root: path.resolve(path.resolve(__dirname)),
    }

    console.log('windiCSSOptions: ', windiCSSOptions)

    return mergeConfig(config, {
      plugins: [VitePluginWindicss(windiCSSOptions)],
      base: configType === 'PRODUCTION' ? GH_PAGE_URL : '',
    })
  },
  features: {
    storyStoreV7: true,
  },
}
