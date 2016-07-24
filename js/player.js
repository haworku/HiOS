var AudioPlayer = function(currentSource) {
  this.volume = 1; // gets volume from web audio API
  this.audio = new Audio(currentSource);
};

AudioPlayer.prototype.play = function(bool, options) {
  if (options) {
    this.audio.currentTime = (options.time || this.audio.currentTime);
    this.audio.src= (options.source || this.audio.src);
  }
  bool ? this.audio.play() : this.audio.pause();
};

AudioPlayer.prototype.adjustVolume = function(newVolume){

};

AudioPlayer.prototype.scrubTo = function(newTime) {

};



