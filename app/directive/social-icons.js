'use strict';

module.exports = function(){
  return {
    restrict: 'EAC', //element attribute class
    template: require('./social-icons.html'),
    controller: ['$log', SocialIconsController],
    bindToController: true,
    controllerAs: 'socialIconsCtrl',
    scope: {
      tester: '@'
    }
  };
};

function SocialIconsController(){
  this.icons = ['fb', 'twitter', 'instagram'];
}
