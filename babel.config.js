module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ... other plugins
    require.resolve('react-native-reanimated/plugin'),
  ],
};
