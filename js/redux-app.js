'use strict';
var APP = {};

const combineReducers = (reducers) => { // takes in reducer functions
  return (state = {}, action) => { // returns a new function representing all reducers logic combined
    return Object.keys(reducers).reduce(
      (nextState, key) => { // nextState is function holding reducer, key is the reducer function
        nextState[key] = reducers[key]( // goes into each reducer function
          state[key], 
          action
        );
      return nextState;
      },
      {}
    );
  };
}; 


APP.launch = function (music) {
  const combinedReducer = combineReducers({
    playerReducer,
    viewReducer
  }); 

  APP.store = createStore(combinedReducer);

  APP.store.dispatch({type: 'LOAD_AUDIO', uploadedMusic: music}); // music from musicupload.js;
  APP.view = hiosView();
  APP.view.buildHTML();
  APP.view.defineSelectors();
  // APP.store.subscribe() // attach all DOM & audio object listeners
  APP.store.dispatch({type: 'PLAY_PAUSE'})
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
