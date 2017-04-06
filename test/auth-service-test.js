'use strict';

describe('Auth Service', function() {

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, $window, $httpBackend) => {
      this.$window = $window; //window object//
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend; //mocks a backend//
    });
  });

  describe('authService.getToken', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.getToken()
      .then( token => {
        expect(token).toEqual('test token');
      })
      .catch(err => {
        expect(err).toEqual(null);
      });
      this.$rootScope.$apply();
    });
  });
});
