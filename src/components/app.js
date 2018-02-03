angular.module('video-player')

  .component('app', {
  // TODO
    templateUrl: 'src/templates/app.html',
    controller: 'videoCtrl'
  })
  .controller('videoCtrl', function($scope) {
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
  });
