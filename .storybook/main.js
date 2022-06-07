const path = require('path')
const WindiCSS = require('vite-plugin-windicss').default

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins ?? []
    config.plugins.push(
      WindiCSS({
        config: path.join(__dirname, '../windi.config.ts'),
      }),
    )
    return config
  },
  features: {
    storyStoreV7: true,
  },
}
