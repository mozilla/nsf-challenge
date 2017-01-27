var marked = require("marked");
var renderer = new marked.Renderer();

module.exports = {
  entry: `./source/js/main.js`,
  output: {
    filename: `./dest/_js/main.compiled.js`
  },
  markdownLoader: {
    renderer: renderer
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: `babel`,
        query: {
          presets: [`es2015`, `react`]
        }
      }, {
        test: /\.md$/,
        exclude: /node_modules/,
        loader: `html!markdown`
      },{
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }};
