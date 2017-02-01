'use strict';
var APP = {};

const combineReducers = (reducers) => { 
  return (state = {}, action) => {
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


APP.launch = function (music) { // called from musicupload.js
  const combinedReducer = combineReducers({
    playerReducer
  }); 

  APP.store = createStore(combinedReducer);
  APP.store.dispatch({type: 'LOAD_PLAYER', uploadedMusic: music}); 
  APP.events = hiosEvents(APP.store);
  APP.view = hiosView();
  APP.view.buildHTML();
  APP.events.defineSelectors();
  APP.events.addListeners();
  // APP.store.subscribe() // attach all DOM & audio object listeners
  APP.store.dispatch({type: 'UPDATE_AUDIO'})
  // play audio
  console.log(APP.store.getState().playerReducer  );
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
