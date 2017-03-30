'use strict';

require('./_edit-gallery.scss');

module.exports = {
  template: require('./edit-gallery.html'),
  controller: ['$log', 'galleryService', EditGalleryController],
  controllerAs: 'EditGalleryCtrl',
  bindings: {
    gallery: '<'
  }
};

function EditGalleryController($log, galleryService) {
  $log.debug('EditGalleryController');

  this.updateGallery = function() {
    $log.debug('EditGalleryCtrl.updateGallery');
    galleryService.updateGallery(this.gallery._id, this.gallery);
  };
};
