module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./app'],
        alias: {
          components: './app/views/components',
          assets: './app/views/assets',
          containers: './app/views/containers',
        },
      },
    ],
  ],
};
