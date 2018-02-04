angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
  this.search = function(query, callback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataType: 'json',
      params: {
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video'
      },
    }).then(function (response) {
      console.log('response', response);
      callback(response.data.items);
    });
  };
});
