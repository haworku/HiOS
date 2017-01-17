'use strict';
var APP = {};
var music = []; // globally declared music holds file upload or uses test files - probably should be JS constant

APP.launch = function () {
  APP.store = createStore(audioReducer);
  APP.store.dispatch({type: 'LOAD_PLAYER'});
  APP.store.dispatch({type: 'BUILD HTML'});
  APP.store.dispatch({type: 'UPDATE_TRACKLIST'});
  APP.store.subscribe() // attach all DOM & audio object listeners
  APP.store.dispatch({type: 'play'})
};


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
