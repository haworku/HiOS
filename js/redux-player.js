const audioReducer = (state = {}, action) => {
  switch (action.type){
  	case 'LOAD_AUDIO':
      return Object.assign( {}, state, {
        music: action.uploadedMusic,
        currentTrack: action.uploadedMusic[0],
        nextQue: action.uploadedMusic.slice(1, -1),
        audioObject: new Audio(action.uploadedMusic[0].source) // init HTML5 audio object for player with current track
        });
      console.log('loaded player')
      return state;

  	case 'PLAY':
      return state;
    case 'PAUSE':
      return state;
    case 'NEXT':
      return state;
    case 'PREVIOUS':
      return state;
    case 'RESTART':
      return state;
    case 'UPDATE_AUDIO':
      return state;
    default:
      return state;
  }
}