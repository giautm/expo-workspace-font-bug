const { createMetroConfiguration } = require('expo-yarn-workspaces')

const defaultSourceExts = ['ts', 'tsx', 'js', 'jsx', 'json', 'wasm']

module.exports = (() => {
  const cfg = createMetroConfiguration(__dirname)

  const {
    resolver: { sourceExts = defaultSourceExts, assetExts },
  } = cfg

  return {
    ...cfg,
    transformer: {
      ...cfg.transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      ...cfg.resolver,
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  }
})()
