'use strict';

// require('./_social-icons.scss');

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

function SocialIconsController($log) {
  $log.debug('SocialIconsController');
  this.icons = ['twitter', 'fb', 'instagram'];
}
