'use strict';

module.exports = {
  return {
    restrict: 'EAC', //element attributes class
    template: require('./social-icons.html'),
    controller: ['$log', SocialIconsController],
    bindToController: true,
    controllerAs: 'socialIconsCtrl',
    scope: {
      tester: '@' // the @ sign means literal value. there will be a title attribute in the markup.
    }
  };
};

functions SocialIconsController() {
  this.icons = ['fb', 'twitter', 'instagram'];
};
//spritecow.com
//gliff icons svg
