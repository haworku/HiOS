const audioReducer = (state = {}, action) => {
  console.log('recieved action: ', action.type, ' previous state: ', state)

  switch (action.type){
  	case 'LOAD_AUDIO':
      return Object.assign( {}, state, {
        music: action.uploadedMusic,
        currentTrack: action.uploadedMusic[0],
        nextQue: action.uploadedMusic.slice(1, -1),
        audioObject: new Audio(action.uploadedMusic[0].source) // init HTML5 audio object for player with current track
        });

  	case 'PLAY_PAUSE':
      return Object.assign( {}, state, {
        playing: !state.playing
        });
    case 'NEXT':
      return state;
    case 'PREVIOUS':
      return state;
    case 'RESTART':
      return state;
    case 'UPDATE_AUDIO':
      return state;
    case 'TOGGLE_SHUFFLE':
      return Object.assign( {}, state, {
        shuffle: !state.shuffle
        });
    case 'TOGGLE_REPEAT':
      return Object.assign( {}, state, {
        loopAll: !state.loopAll
        });
      return state;
    default:
      return state;
  }
};


