'use strict';

describe('Gallery Item Component', function() {
  before(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $http, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });

  describe('galleryItemCtrl.deleteDone', () => {
    it('should call deleteDone', () => {
      let mockBindings = {
        gallery: {
          _id: '12345',
          name: 'test name',
          desc: 'test description',
          pics: []
        },
        deleteDone: function(data) {
          expect(data.galleryData._id).toEqual('12345');

        }
      };
    });
  });
});
