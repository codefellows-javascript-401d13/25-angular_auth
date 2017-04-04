'use strict';

require('./_thumbnail-container.scss');

module.exports = {
  template: require('./thumbnail-container.html'),
  controllerAS: 'thumbnailContainerCtrl',
  bindings: {
    gallery: '<'
  }
};
