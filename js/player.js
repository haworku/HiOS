'use strict';

var hiosPlayer = {
  audio: {}, // this is the HTML5 audio object
  update: function(options) {
    this.audio.currentTime = (options.time || this.audio.currentTime);
    this.audio.src= (options.source || this.audio.src);
    this.audio.volume = (options.volume || this.audio.volume);
  }
};



