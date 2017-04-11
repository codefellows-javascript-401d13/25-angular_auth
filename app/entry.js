'use strict';

require('./scss/main.scss');

const path = require('path');
const angular = require('angular');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const uiRouter = require('angular-ui-router');
const ngTouch = require('angular-touch');
const ngAnimate = require('angular-animate');
const uiBootstrap = require('angular-ui-bootstrap');
const ngFileUpload = require('ng-file-upload');

const glgram = angular.module('glgram', [ngTouch, ngAnimate, uiRouter, uiBootstrap, ngFileUpload]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( key => {
  glgram.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  glgram.controller(name, module);
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  glgram.service(name, module);
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  glgram.component(name, module);
});
