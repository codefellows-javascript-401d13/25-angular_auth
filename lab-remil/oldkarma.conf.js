const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*-test.js',
      'node_modules/angular-mocks/angular-mocks.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*-test.js': ['webpack'],
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
  });
};
