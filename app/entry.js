'use strict';

require('./scss/main.scss');

const angular = require('angular');
const pascalcase = require('pascalcase');
const camelcase = require('camelcase');
const uiRouter = require('angular-ui-router');
const ngTouch = require('angular-touch');
const ngAnimate = require('angular-animate');
const ngFileUpload = require('ng-file-upload')
const path = require('path');

const brianGram = angular.module('brianGram',[ngTouch, ngAnimate, uiRouter, ngFileUpload]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  brianGram.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  brianGram.controller(name, context(key));
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  brianGram.service(name, context(key));
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  brianGram.component(name, context(key));
});
