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

const cfgram = angular.module('cfgram', [ngTouch, ngAnimate, uiRouter, ngFileUpload]);

// try logging "context" check out "keys"
// log the shit out of this
// name         module
// name       dependencies
//  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( key => {
  cfgram.config(context(key));
});


context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name =  pascalcase(path.basename(key, '.js'));
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
