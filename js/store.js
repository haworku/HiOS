const createStore = (combinedReducer) => {
  console.log('creating store')
  let state;
  let listeners = [] //  keep track of the change listeners

  const getState = () => state; // current state

  const dispatch = (action)  => {
    console.log('listeners', listeners)
    state = combinedReducer(state, action);
    listeners.forEach( listener => listener() ); // notify each listener after there's a new state from reducer
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter( l => l !== listener )// to remove listener subscribe again
    }
  }

  dispatch({}) // initial state rendered when store created

  return { getState, dispatch, subscribe};
};
