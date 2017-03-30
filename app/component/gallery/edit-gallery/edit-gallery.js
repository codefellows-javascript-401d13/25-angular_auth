'use strict';

require('./_edit-gallery.scss');

module.exports = {
  template: require('./edit-gallery.html'),
  controller: ['$log', 'galleryService', EditGalleryController],
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<'
  }
};

function EditGalleryController($log, galleryService){
  $log.debug('EditGalleryController');

  this.updateGallery = function(){
    $log.debug('editGalleryCtrl.updateGallery');
    galleryService.editGallery(this.gallery._id, this.gallery);
  };
}
