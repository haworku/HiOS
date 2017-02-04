observeStore = (store, onChange) => {
  let currentState;
  handleChange = () => {
    let nextState = store.getState();
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}

combineReducers = (reducers) => { 
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

resetNextQue = (shuffling, music) => {

}

shuffleCurrentTrack = (shuffling, music) => {
}

/**
 * Randomize array element order in-place.  Using Durstenfeld shuffle algorithm.
 */
hiosShuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
