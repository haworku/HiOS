const createStore = (combinedReducer) => {
  console.log('creating store')
  let state;
  let listeners = [] // because the subscribe function can be called many times we need to keep track of the change listeners

  const getState = () => state; // current state

  const dispatch = (action)  => {
    state = combinedReducer(state, action);
    listeners.forEach( listeners => listener() 
    ); // notify each listener after there's a new state from reducer
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