const path = require('path')
const VitePluginWindicss = require('vite-plugin-windicss').default

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
    config.plugins = config.plugins ?? []

    const windiCSSOptions = {
      config: path.join(__dirname, '..', '/windi.config.ts'),
      root: path.resolve(path.resolve(__dirname)),
    }

    console.log('windiCSSOptions: ', windiCSSOptions)

    config.plugins.push(VitePluginWindicss(windiCSSOptions))

    return config
  },
  features: {
    storyStoreV7: true,
  },
}
