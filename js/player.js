var AudioPlayer = function(currentTrack) {
  this.volume = 1; // gets volume from web audio API
  this.track = currentTrack;
  this.startTime = 0;
};


AudioPlayer.prototype.play = function(bool, options) {
    bool ? console.log('playing') : console.log('paused')

// if true play if false pause
// options = {from: 0} used to start over track or adjust playback 
}

AudioPlayer.prototype.adjustVolume = function(newVolume){

};

AudioPlayer.prototype.scrubTo = function(newTime) {

};

