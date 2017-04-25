'use strict';

module.exports = {
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        'awesome-typescript-loader?{configFileName: "./src/tsconfig.json"}',
        'angular2-template-loader', {
          loader: 'ng-router-loader',
          options: {
            loader: 'async-system',
            genDir: 'compiled',
            aot: true
          }
        }
      ]
    }]
  }
}
