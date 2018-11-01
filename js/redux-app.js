'use strict';
let APP = {};

APP.launch = function (music) { // this method is called from musicupload.js
  const combinedReducer = combineReducers({
    playerReducer
  }); 

  APP.store = createStore(combinedReducer);

  console.log(combinedReducer, APP.store)

  APP.actions = hiosActions(APP.store);
  APP.audio = hiosAudio();
  APP.view = hiosView(APP.actions, APP.audio);
  APP.hiosBind = bindActionCreators(APP.actions, APP.store.dispatch)
  APP.view.buildHTML(); 
  observeStore(APP.store, APP.view.updateView);
  APP.store.dispatch({type: 'LOAD', uploadedMusic: music});   
  APP.audio.init(true);
};
