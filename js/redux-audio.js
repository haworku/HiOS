'use strict';

hiosAudio = () => {
  var audio = {}; // HTML5 audio object

  return {
    init: function (src){
      audio = new Audio(src);
    },
    update: function (options) {
      audio.currentTime = (options.time || audio.currentTime);
      audio.src= (options.source || audio.src);
      audio.volume = (options.volume || audio.volume);
    },
    play: function (bool) {
      bool ? audio.play() : audio.pause();
    },
    returnAudio: function () {
      return audio;
    },
    justStarted: function () {
      return audio.currentTime < 5 ? true : false;
    }
  };
};
