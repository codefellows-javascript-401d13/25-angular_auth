'use strict';

require('./_login.scss');

module.exports = {
  template: require('./login.html'),
  controller: ['$log', '$location', '$scope', 'authService', LoginController],
  controllerAs: 'loginCtrl'
};

function LoginController($log, $location, $scope, authService) {
  $log.debug('LoginController');

  authService.getToken()
  .then( () => {
    $location.url('/home');
  });

  this.login = function() {
    $log.debug('loginCtrl.login');

    authService.login(this.user)
    .then( () => {
      $location.url('/home');
    });
  };
}
