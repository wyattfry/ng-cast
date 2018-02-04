angular.module('video-player')

  .component('app', {
  // TODO
    templateUrl: 'src/templates/app.html',
    controller: 'videoCtrl'
  })
  .controller('videoCtrl', function($scope, youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.setVideos = (videos) => this.videos = videos;
    this.searchResults = (userInput) => {
      youTube.search(userInput, this.setVideos);
      //console.log('search button clicked at', new Date().getTime());
    };
  });