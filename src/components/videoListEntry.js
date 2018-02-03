angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    bindings: {
      videos: '<',
      video: '<',
      index: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html',
    controller: function() {
      this.handleClick = (index) => {
        console.log(this);
      };
    }   
  });
