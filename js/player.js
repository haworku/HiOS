var AudioPlayer = function(currentSource) {
  this.volume = 1; // gets volume from web audio API
  this.currentTime = 0;
  this.audio = new Audio(currentSource);
};

AudioPlayer.prototype.play = function(bool, options) {
  if (options && options.from){
    this.startTime = options.from;
  }
  if (options && options.source){
    this.audio.src= options.source;
  }

  bool ? this.audio.play() : this.audio.pause();
};

AudioPlayer.prototype.adjustVolume = function(newVolume){

};

AudioPlayer.prototype.scrubTo = function(newTime) {

};



