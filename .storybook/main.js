const path = require('path')
const postcssConfig = require('../postcss.config')

module.exports = {
  stories: ['../src/**/*.story.mdx', '../src/**/*.story.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-gatsby',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ]
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries'),
    ]

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main']

    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        {
          loader: require.resolve('style-loader'),
          options: {
            esModule: true,
            modules: {
              namedExport: true,
            },
          },
        },
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            esModule: true,
            modules: {
              namedExport: true,
            },
          },
        },
        require.resolve('sass-loader'),
      ],
    })

    return config
  },
}
