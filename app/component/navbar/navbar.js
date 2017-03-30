'use strict';

require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$location', '$rootScope', 'authService', NavbarController],
  controllerAs: 'navbarCtrl'
};

function NavbarController($log, $location, $rootScope, authService){
  $log.debug('NavbarController');

  this.checkPath = function() {  //whats the current path. if were not logged in yet it wont show the log out button
    let path = $location.path();
    if(path === '/join') {
      this.hideButtons = true;
    }

    if(path !== '/join') { //check url path, if logged in, show log out button
      this.hideButtons = false;
      authService.getToken()
      .catch( () => {
        $location.url('/join#login');
      });
    }
  };

  this.checkPath();

  $rootScope.$on('$locationChangeSuccess', () => {
    this.checkPath();
  });

  this.logout = function() {
    $log.log('navbarCtrl.logout');
    this.hideButtons = true;
    authService.logout()
    .then( ()=> {
      $location.url('/');
    });
  };
}
