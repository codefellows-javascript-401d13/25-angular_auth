'use strict';

module.exports = ['$logProvider', logConfig];

function logConfig($logProvider){
  $logProvider.debugEnabled(__DEBUG__);
}


//service grabs gallaries, array of gallaries, hits, now have all galleries as a property on the controller.
// controller looks at service//
