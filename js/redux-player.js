const playerReducer = (state = {}, action) => {
  console.log('recieved action: ', action.type, ' previous state: ', state)

  switch (action.type){
  	case 'LOAD_PLAYER':
      return Object.assign( {}, state, {
        music: action.uploadedMusic,
        fullPlayer: false,
        audioObject: new Audio(), // HTML5 audio object with current track
        completeQue: [],
        nextQue: action.uploadedMusic.slice(1),
        currentTrack: action.uploadedMusic[0],
        volume: .5,
        playing: false,
        shuffle: false,
        loopCurrent: false,
        loopAll: false
      });

  	case 'TOGGLE_PLAY':
      return Object.assign( {}, state, {
        playing: !state.playing,
        });
    case 'NEXT':
      return Object.assign( {}, state, {
        completeQue: state.completeQue.concat(state.currentTrack),
        nextQue: state.nextQue.slice(1),
        currentTrack: state.nextQue[0]
      });
      // if more songs left go to next song
      // no more songs left but looping playlist start over
      // if no more songs left and not looping stop playing
      return state;
    case 'JUMP_TO':
      return state;
    case 'PREVIOUS':
      if (state.audioObject.currentTime < 5){
        return Object.assign( {}, state.audioObject, { currentTime: 0});
      } else {
        return Object.assign( {}, state, {
          completeQue: state.completeQue.slice(-1),
          nextQue: [].concat(state.currentTrack, state.nextQue),
          currentTrack: state.completeQue[-1]
        });
      }
      return state;
    case 'UPDATE_AUDIO':
      return Object.assign( {}, state, {
        audioObject: Object.assign( {}, state.audioObject, {
          currentTime: (action.tracking || state.audioObject.currentTime),
          src: state.currentTrack.source,
          volume: (action.volume || state.audioObject.volume)
        })     
      });

    case 'VOLUME':
      return Object.assign( {}, state, {
        volume: action.volume
        }); 
      return state

    case 'TOGGLE_SHUFFLE':
      return Object.assign( {}, state, {
        shuffle: !state.shuffle
      });

    case 'TOGGLE_LOOP':
      return Object.assign( {}, state, {
        loopAll: !state.loopAll
      });

    case 'TOGGLE_PLAYER_TYPE':
      return Object.assign( {}, state, {
        fullPlayer: !state.fullPlayer
      });

      return state;
    default:
      return state;
  }
};


