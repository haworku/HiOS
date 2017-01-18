const playerReducer = (state = {}, action) => {
  console.log('recieved action: ', action.type, ' previous state: ', state)

  switch (action.type){
  	case 'LOAD_PLAYER':
      return Object.assign( {}, state, {
        music: action.uploadedMusic,
        audioObject: new Audio(action.uploadedMusic[0].source), // HTML5 audio object with current track
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
    // audio.currentTime < 5 ? true : false;
      return Object.assign( {}, state, {
        audioObject: !state.playing
        });
    case 'UPDATE':
      // audio.currentTime = (options.time || audio.currentTime);
      // audio.src= (options.source || audio.src);
      // audio.volume = (options.volume || audio.volume);
      return state
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


