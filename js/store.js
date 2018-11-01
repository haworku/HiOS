const createStore = (combinedReducer) => {
  console.log('creating store')
  let state;
  let listeners = [];

  const getState = () => state; 

  const dispatch = (action)  => {
    console.log('listeners', listeners, 'action', action)
    state = combinedReducer(state, action);
    listeners.forEach( listener => listener() ); 
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter( l => l !== listener ) // to remove listener subscribe again
    }
  }

  dispatch({}) // initial state rendered when store created

  return { getState, dispatch, subscribe};
};
