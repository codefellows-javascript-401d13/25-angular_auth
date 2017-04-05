'use strict';

require('./_thumbnail.scss');

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'picService', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    galleryID: '='
  }
};

function ThumbnailController($log, picService) {
  $log.debug('ThumbnailController');

  this.deletePic = function() {
    $log.debug('deletePic', this.gallery, this.pic._id);
//    picService.deletePic(this.pic._id);
  };
}


// this.deleteGallery = function() {
//   galleryService.deleteGallery(this.gallery._id);
// };
