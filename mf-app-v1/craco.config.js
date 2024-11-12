const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const { dependencies } = require("./package.json");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "remoteApp1",
          filename: "remoteEntry.js",
          exposes: {
            "./App": "./src/App"
          },
          shared: {
            ...dependencies,
            react: {
              singleton: true,
              eager: false,
              requiredVersion: dependencies["react"],
            },
            "react-dom": {
              singleton: true,
              eager: false,
              requiredVersion: dependencies["react-dom"],
            },
          },
        })
      );

      webpackConfig.output = {
        publicPath: "auto"
      };

      return webpackConfig;
    },
  },
};