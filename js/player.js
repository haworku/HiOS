var AudioPlayer = function(currentSource) {// gets volume from web audio API
  this.audio = new Audio(currentSource);
};

AudioPlayer.prototype.update = function(options) {
  this.audio.currentTime = (options.time || this.audio.currentTime);
  this.audio.src= (options.source || this.audio.src);
};



