const viewReducer = (state = 0, action){
  switch (action.type){
  	CASE 'BUILD HTML':
      // combine with define selectors
      console.log('load player')
      return state;

  	CASE 'UPDATE_TRACKLIST':
  	// combine with populate current track
      return state;
    CASE 'RESET_TRACKING':
    	//called only once metadata has loaded
      return state;
    CASE 'SWAP_SKIN':
      return state;
    default:
      return state;
  }
}

// need to be listening for events from audioReducer play/pause etc.