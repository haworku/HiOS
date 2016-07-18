var AudioPlayer = function(currentTrack) {
  this.volume = 1; // gets volume from web audio API
  this.track = currentTrack;
  this.startTime = 0;
  this.audio = new Audio(this.track.source);
};

AudioPlayer.prototype.play = function(bool, options) {
  bool ? this.audio.play() : this.audio.pause();
};

AudioPlayer.prototype.adjustVolume = function(newVolume){

};

AudioPlayer.prototype.scrubTo = function(newTime) {

};



