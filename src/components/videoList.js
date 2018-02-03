angular.module('video-player')
  .component('videoList', {
    // TODO
    bindings: {
      setVideo: '<',
      videos: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
