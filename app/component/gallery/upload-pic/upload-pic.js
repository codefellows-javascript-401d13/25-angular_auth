'use strict';


console.log('slkfjlksdjflksjflksdjlfkjsdlkfj cooolllllll beans');
require('./_upload-pic.scss');

module.exports = {
  template: require('./upload-pic.html'),
  controller: ['$log', 'picService', UploadPicController],
  controllerAs: 'uploadPicCtrl',
  bindings: {
    gallery: '<'
  }
};

function UploadPicController($log, picService) {
  $log.debug('UploadPicController');

  this.pic = {};

  this.uploadPic = function() {
    console.log('this.pic', this.pic);
    console.log('this.gallery', this.gallery);
    picService.uploadGalleryPic(this.gallery, this.pic)
    .then( () => {
      this.pic.name = null;
      this.pic.desc = null;
      this.pic.file = null;
    });
  };
}
