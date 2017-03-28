let player = window.hios.playerReducer;

const hiosApp = window.Redux.combineReducers({
  player,
});

window.hios.store = window.Redux.createStore(hiosApp);
