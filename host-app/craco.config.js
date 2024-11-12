const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const { dependencies } = require("./package.json");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "host",
          remotes: {
            remoteApp1: "remoteApp1@http://localhost:3001/remoteEntry.js",
            remoteApp2: "remoteApp2@http://localhost:3002/remoteEntry.js"
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

      webpackConfig.devServer = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };

      webpackConfig.output = {
        publicPath: "auto"
      };

      return webpackConfig;
    },
  },
};