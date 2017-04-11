'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controller: ['$log', 'galleryService', GalleryItemController],
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<'
  }
};

function GalleryItemController($log, galleryService) {
  $log.debug('GalleryItemController');

  this.showEditGallery = false;
  this.hideEditButtons = false;

  this.deleteGallery = function() {
    $log.debug('galleryItemCtrl.deleteGallery');
    galleryService.deleteGallery(this.gallery._id);

  };
}
