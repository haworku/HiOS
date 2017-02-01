'use strict';
var APP = {};

APP.launch = function (music) { // called from musicupload.js
  const combinedReducer = combineReducers({
    playerReducer
  }); 

  APP.store = createStore(combinedReducer);
  APP.events = hiosEvents();
  APP.view = hiosView();
  observeStore(APP.store, APP.view.updateView())

  //WRAP 
  // where should these  happen - side effects of loading player
  APP.store.dispatch({type: 'LOAD_PLAYER', uploadedMusic: music}); 
  APP.view.buildHTML(); 
  APP.events.addListeners();
  // ./ WRAP

  APP.store.dispatch({type: 'UPDATE_AUDIO'})
  
};