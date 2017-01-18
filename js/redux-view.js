const viewReducer = (state = 0, action) =>{
  switch (action.type){
  	case 'BUILD HTML':
      // combine with define selectors
      console.log('load player')
      return state;

  	case 'UPDATE_TRACKLIST':
  	// combine with populate current track
      return state;

    case 'RESET_TRACKING':
    	//called only once metadata has loaded
      return state;
    case 'SWAP_SKIN':
      return state;
      
    default:
      return state;
  }
}

// need to be listening for events from audioReducer play/pause etc.