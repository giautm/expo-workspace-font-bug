const { getDefaultConfig } = require('@expo/metro-config');
const { createMetroConfiguration } = require('expo-yarn-workspaces')

module.exports = (() => {
  const defaultConfig = getDefaultConfig(__dirname);
  const workspacesConfig = createMetroConfiguration(__dirname)
  const {
    resolver: { sourceExts, assetExts },
  } = defaultConfig

  return {
    ...defaultConfig,
    ...workspacesConfig,
    transformer: {
      ...defaultConfig.transformer,
      ...workspacesConfig.transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      ...defaultConfig.resolver,
      ...workspacesConfig.resolver,
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  }
})()
