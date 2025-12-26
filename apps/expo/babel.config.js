const path = require('path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@ui': path.resolve(__dirname, '../../packages/app/ui'),
            '@store': path.resolve(__dirname, '../../packages/app/store'),
            '@services': path.resolve(__dirname, '../../packages/app/services'),
            '@utils': path.resolve(__dirname, '../../packages/app/utils'),
            '@hooks': path.resolve(__dirname, '../../packages/app/hooks'),
          },
        },
      ],
      'react-native-worklets/plugin',
    ],
  }
}
