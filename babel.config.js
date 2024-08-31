module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.ios.js',
          '.ios.ts',
          '.ios.jsx',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.jsx',
          '.android.tsx',
        ],
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@redux': './src/redux',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
    'jest-hoist',
  ],
};
