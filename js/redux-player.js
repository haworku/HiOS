const audioReducer = (state = {}, action) => {
  console.log('recieved action: ', action.type, ' previous state: ', state)

  switch (action.type){
  	case 'LOAD_PLAYER':
      return Object.assign( {}, state, {
        music: action.uploadedMusic,
        audioObject: new Audio(action.uploadedMusic[0].source), // initializes HTML5 audio object for player with current track
        completeQue: [],
        nextQue: action.uploadedMusic.slice(1, -1),
        currentTrack: action.uploadedMusic[0],
        volume: .5,
        playing: false,
        shuffle: false,
        loopCurrent: false,
        loopAll: false
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


