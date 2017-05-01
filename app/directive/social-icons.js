'use strict';

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./social-icons.html'),
    controller: ['$log', SocialIconsController],
    bindToController: true,
    controllerAs: 'socialIconsCtrl',
    scope: {
      individualIcons: '@'
    }
  }
}

function SocialIconsController() {
  this.icons = ['linkedIn', 'github', 'twitter', 'instagram'];
}
