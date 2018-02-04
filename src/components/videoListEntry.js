angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    bindings: {
      onClick: '<',
      videos: '<',
      video: '<',
      index: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html',
      
  });
