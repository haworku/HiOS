'use strict';
var APP = {};

APP.state = { 
  completeQue: [], 
  nextQue: music, 
  currentTrack: {}, 
  volume: .5,
  playing: true, 
  shuffle: false, 
  loop: false 
};
APP.state.currentTrack =  APP.state.nextQue.shift();

APP.view = hiosView();
APP.view.buildHTML();
APP.view.defineSelectors();
APP.view.populateCurrentTrack(APP.state.currentTrack);

APP.player = hiosPlayer();
APP.player.init(APP.state.currentTrack.source);
APP.player.play(true);



/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
Array.prototype.hiosShuffle = function () {
  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};