module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx'],
        alias: {
          '~components': './src/components/',
          '~configs': './src/configs/',
          '~features': './src/features',
          '~helpers': './src/helpers',
          '~hooks': './src/hooks/',
          '~redux': './src/redux',
          '~resources': './src/resources',
          '~routes': './src/routes',
          '~services': './src/services/',
          '~utils': './src/utils',
        },
        root: '.',
      },
    ],
  ],
};
