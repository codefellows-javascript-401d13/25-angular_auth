'use strict';

require('./_create-gallery.scss');

module.exports = {
  template: require('./create-gallery.html'),
  controller: ['$log', 'gallerySerivce', CreateGalleryController],
  controllerAs: 'createGalleryCtrl'
};

function CreateGalleryController($log, gallerySerivce){
  $log.debug('CreateGalleryController');

  this.gallery ={};

  this.createGallery=function(){
    gallerySerivce.createGallery(this.gallery)
    .then(() => {
      this.gallery.name = null;
      this.gallery.desc = null;
    });
  };
}
