AudioPlayer.prototype.navigate = function(direction) {
  var currentTrackIndex;
  switch (direction) {
    case 'RANDOM':
      currentTrackIndex =  Math.floor(Math.random() * (currentAlbum.length));
    break;

    case 'NEXT':
      if (currentTrackIndex + 1 >= currentAlbum.length) {
        currentTrackIndex = 0;
      } else {
        currentTrackIndex++;
      }
    break;

    case 'PREV':
      if (currentTrackIndex === 0) {
        currentTrackIndex = currentAlbum.length - 1;
      } else {
        currentTrackIndex--;
      }
    break;

    default:
      console.warn('me not know');
    break;
  }
};

AudioPlayer.prototype.play = function() {

};

AudioPlayer.prototype.pause = function() {

};



  