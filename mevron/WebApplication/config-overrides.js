const path = require('path');
const { override, addBabelPlugins, babelInclude, addBabelPresets, addWebpackExternals } = require('customize-cra');

module.exports = override(
    ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
    babelInclude([path.resolve(__dirname, 'web')]),
    ...addBabelPresets('babel-preset-expo', '@babel/preset-react', '@babel/preset-env'),
    addWebpackExternals({
        '@mevron/cross-core': './_CrossBasement/CrossCore',
        '@mevron/cross-page': './_CrossBasement/CrossPage',
    }),
);
