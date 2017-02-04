'use strict';
var APP = {};

APP.launch = function (music) { // called from musicupload.js
  const combinedReducer = combineReducers({
    playerReducer
  }); 

  APP.store = createStore(combinedReducer);
  APP.events = hiosEvents(APP.store);
  APP.audio = hiosAudio();
  APP.view = hiosView(APP.events, APP.audio);
  APP.view.buildHTML(); 
  observeStore(APP.store, APP.view.updateView);

  //WRAP 
  // where should these  happen - side effects of loading player
  APP.store.dispatch({type: 'LOAD_PLAYER', uploadedMusic: music}); 
  // ./ WRAP
  
};