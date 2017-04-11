'use strict';

require('./scss/main.scss');

const path = require('path');
const angular = require('angular');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const uiRouter = require('angular-ui-router');
const ngTouch = require('angular-touch');
const ngAnimate = require('angular-animate');
const ngFileUpload = require('ng-file-upload');
const uiBootstrap = require('angular-ui-bootstrap');

const cfgram = angular.module('cfgram', [ngTouch, ngAnimate, uiRouter, uiBootstrap, ngFileUpload]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( key => {
  cfgram.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.controller(name, module);
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.service(name, module);
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.component(name, module);
});

context = require.context('./filter/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.filter(name, module); //name is from the file name.
});

context = require.context('./directive/', true, /\.js$/);
context.keys().forEach( key => { //for each key let name.. //
  let name = camelcase(path.basename(key, '.js'));//path is a native node method
  let module = context(key);
  cfgram.directive(name, module); //name is from the file name.
});
