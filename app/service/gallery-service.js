'use strict';

module.exports = ['$q', '$log', '$http', 'authService', gallerySerivce];

function gallerySerivce($q, $log, $http, authService){
  $log.debug('gallerySerivce');

  let service = {};
  service.galleries = [];

  service.createGallery = function(gallery){
    $log.debug('gallerySerivce.createGallery');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.post(url, gallery, config);
    })
    .then(res => {
      $log.log('gallery created');
      let gallery = res.data;
      service.galleries.unshift(gallery);
      return gallery;
    })
    .catch(err => {
      $log.error(err.message);
    });
  };

  service.deleteGallery = function(galleryId, galleryData) {
    $log.debug('service.deleteGallery');
    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery/${galleryId}`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
    });
    //TODO finish this route;
  };
}
