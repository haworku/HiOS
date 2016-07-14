var AudioPlayer = function (musicArray, albumsArray) {
  this.allMusic = musicArray;
  this.allAlbums = albumsArray; 
  this.currentAlbum = {}; // Album object
  this.currentTrack = {}; // Track object
  this.paused = false;
};
