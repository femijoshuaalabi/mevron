module.exports = function (api) {
    api.cache(true);
    return {
        // presets: ['babel-preset-expo'],
        presets: ['@expo/next-adapter/babel'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@mevron/cross-core': './_CrossBasement/CrossCore',
                        '@mevron/cross-page': './_CrossBasement/CrossPage',
                    },
                },
            ],
            require.resolve('react-native-reanimated/plugin'),
        ],
    };
};
