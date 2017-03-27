const playerReducer = (state = {}, action) => {
  console.log('received action: ', action.type, ' previous state: ', state);

  switch (action.type){
    case 'LOAD':
      return Object.assign( {}, state, {
        music: action.uploadedMusic,
        fullPlayer: false,
        completeQue: [],
        nextQue: action.uploadedMusic.slice(1),
        currentTrack: action.uploadedMusic[0],
        volume: .5,
        playing: false,
        shuffle: false,
        loopCurrent: false,
        loopAll: false
      });

    case 'KILL':
      return Object.assign( {}, state, {
        music: [],
        playing: false,
      });

    case 'RESET':
      return Object.assign( {}, state, {
        completeQue: [],
        nextQue: action.music.slice(1),
        currentTrack: action.music[0],
        volume: .5,
        playing: false,
        shuffle: false,
        loopCurrent: false,
        loopAll: false,
    });

  	case 'TOGGLE_PLAY':
      return Object.assign( {}, state, {
        playing: !state.playing,
      });

    case 'SET_TRACK':
      return Object.assign( {}, state, {
        currentTrack: action.track,
        completeQue: action.completeQue,
        nextQue: action.nextQue
      });
   
    case 'VOLUME':
      return Object.assign( {}, state, {
        volume: (action.volume || state.volume)
      });

    case 'TOGGLE_SHUFFLE':
      return Object.assign( {}, state, {
        shuffle: !state.shuffle, 
        nextQue: shuffleNextQue(state.shuffle, state.music),
      });

    case 'TOGGLE_LOOP':
      return Object.assign( {}, state, {
        loopAll: !state.loopAll
      });

    case 'TOGGLE_PLAYER_TYPE':
      return Object.assign( {}, state, {
        fullPlayer: !state.fullPlayer
      });

   
    default:
      return state;
  }
};

console.log('load player reducer')
