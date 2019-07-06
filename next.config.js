const path = require("path");

const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withTypescript = require("@zeit/next-typescript");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = withCSS(
  withSass(
    withTypescript(
      withImages({
        webpack: (config, { dev, isServer }) => {
          config.module.rules.push(
            {
              use: "babel-loader",
              test: /\.(js|jsx)$/,
              exclude: /node_modules/
            },
            {
              test: /\.tsx?$/,
              loader: "awesome-typescript-loader"
            },
            {
              loader: "emit-file-loader?outputPath=static/",
              test: /\.(css)$/
            },
            {
              test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf|ico)$/,
              use: [
                {
                  loader: "file-loader",
                  options: {
                    limit: 100000
                  }
                }
              ]
            },
            {
              test: /\.svg/,
              use: {
                loader: "svg-url-loader",
                options: {}
              }
            }
          ),
            config.plugins.push(
              new SWPrecacheWebpackPlugin({
                verbose: true,
                staticFileGlobsIgnorePatterns: [/\.next\//],
                runtimeCaching: [
                  {
                    handler: "networkFirst",
                    urlPattern: /^https?.*/
                  }
                ]
              })
            );
          return config;
        }
      })
    )
  )
);
