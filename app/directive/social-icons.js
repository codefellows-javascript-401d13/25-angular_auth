'use strict';

module.exports = function() {
    return {
        restrict: 'EAC',
        template: require('./socialmedia-icons.html'),
        controller: ['$log', SocialIconsController],
        bindToController: true,
        controllerAs: 'socialIconsCtrl',
        scope: {
            tester: '@'
        }
    };
};

function SocialIconsController(icons) {
    // $log.log(this);
    // this.gotohell = 'whyohwhy?@!!!!!!!!!!!!!!!!!!!!!!!!!';
    this.icons = [
        {
            name: 'evernote',
            url: 'http://www.evernote.com'
         },
         {
         name: 'dribble',
         url: 'http://www.dribble.com'
        },
        {
         name: 'instagram',
         url: 'http://www.instagram.com'
           }
           ];
        }
     