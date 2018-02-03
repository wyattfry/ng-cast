angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    bindings: {
      setVideo: '<',
      videos: '<',
      video: '<',
      index: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html',
      
  });
