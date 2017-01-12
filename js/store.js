  let state = {
    music: [],
    completeQue: [],
    nextQue: []
    currentTrack: {},
    volume: .5,
    playing: false,
    shuffle: false,
    loopCurrent: false,
    loopAll: false
  };

  let listeners = [] //because the subscribe function can be called many times we need to keep track of the change listeners

  const getState = () => state;

  const dispatch = (action ( => {
    state = reducer(state, action);
    listeners.forEach( listeners => listener() 
    ); //notify each listener after there's a new state from reducer
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter( l => l !== listener )// to remove listener subscribe again
    }
  };

  dispatch({}) //for intial state to be rendered when store created

  return { getState, dispatch, subscribe };
}