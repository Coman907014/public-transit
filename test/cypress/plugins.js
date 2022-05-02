const wp = require('@cypress/webpack-preprocessor');

module.exports = async (on, config) => {

  config.baseUrl = 'http://localhost:3000/';

  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js"]
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            }
          }
        ]
      },
    },
  };
  on('file:preprocessor', wp(options));

  return config;
};