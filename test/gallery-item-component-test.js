'use strict';

describe('Gallery Item Component', function () {
  before(()=>{
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
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
        deleteDone: function(data){
          expect(data.galleryData._id).toEqual('12345');
        }
      };
      let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
      galleryItemCtrl.deleteDone({ galleryData: galleryItemCtrl.gallery });
      //additional tests go here//
      this.$rootScope.$apply();
    });
  });

  it('should call the deleteDone method with gallery after the deleteGallery', () => {
    let url = 'http://localhost:3000/api/gallery/12345';
    let headers = {
      Accept: 'application/json',
      Authorization: 'Bearer test token'
    };
    let testGallery = {
      _id: '12345',
      name: 'test name',
      desc: 'test desc'
    };
    let mockBindings = {
      gallery: testGallery,
      deleteDone: function(data) {
        expect(data.galleryData._id).toEqual('12345');
      }
    };
    this.$httpBackend.expectDELETE(url, headers)
    .respond(204);
    let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
    galleryItemCtrl.deleteGallery(testGallery._id);
    this.$httpBackend.flush();
    this.$rootScope.$apply();

  });
});
