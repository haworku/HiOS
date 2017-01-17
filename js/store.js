const createStore = (combinedReducer) => {
  console.log('loading store')
  let state = {
    music: [],
    audioObject: {}, // HTML5 audio object
    completeQue: [],
    nextQue: [],
    currentTrack: {},
    volume: .5,
    playing: false,
    shuffle: false,
    loopCurrent: false,
    loopAll: false
  };

  let listeners = [] //because the subscribe function can be called many times we need to keep track of the change listeners

  const getState = () => state; // current state


 
   const dispatch = (action)  => {
    state = combinedReducer(state, action);
    listeners.forEach( listeners => listener() 
    ); // notify each listener after there's a new state from reducer
  }
  
  dispatch({}) // intial state to be rendered when store created

 return { getState, dispatch};
}

  // const subscribe = (listener) => {
  //   listeners.push(listener);
  //   return () => {
  //     listeners = listeners.filter( l => l !== listener )// to remove listener subscribe again
  //   }
  // };
