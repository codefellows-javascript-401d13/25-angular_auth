'use strict';

//TODO get cheat sheaets for angular, regex, mongoose, node, mongodb, css, jquery
module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./social-icons.html'),
    controller: ['$log', SocialIconsController],
    bindToController: true,
    controllerAs: 'socialIconsCtrl',
    scope: {
      tester: '@'
    }
  };
};

function SocialIconsController() {
  this.icons = ['fb', 'twitter', 'instagram'];
};
