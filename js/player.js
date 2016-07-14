var AudioPlayer = function(currentTrack) {
  this.volume = 1; // gets volume from web audio API
  this.track = currentTrack;
};


AudioPlayer.prototype.play = function(bool, options) {
// if true play if false pause
// options = {fromBeginning: true} used to start over track on first previous click
};

AudioPlayer.prototype.adjustVolume = function(newVolume){

};

AudioPlayer.prototype.scrubTo = function(newTime) {

};

