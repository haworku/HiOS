'use strict';
var APP = {};

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