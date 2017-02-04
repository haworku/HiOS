const playerReducer = (state = {}, action) => {
  console.log('received action: ', action.type, ' previous state: ', state)

  switch (action.type){
  	case 'LOAD_PLAYER':
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

  	case 'TOGGLE_PLAY':
      return Object.assign( {}, state, {
        playing: !state.playing,
      });

    case 'NEXT':
      if (state.nextQue.length > 0){ // go to next song
        return Object.assign( {}, state, {
          completeQue: state.completeQue.concat(state.currentTrack),
          nextQue: action.nextQue.slice(1),
          currentTrack:action.nextQue[0],
        });
      } else if (state.loopAll == true) { // set player to continue looping
        return Object.assign( {}, state, {
          completeQue: state.completeQue.concat(state.currentTrack),
          nextQue: resetNextQue(state.shuffle, state.music),
          currentTrack: state.completeQue[0], 
        });
      } else { //  reset player to start over NEED TO ALSO REFRESH DOM NO SONGS HIGHLIGHTED
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

      }   

    case 'JUMP_TO':
      return Object.assign( {}, state, {
        completeQue: state.completeQue.concat(state.currentTrack),
        nextQue: resetNextQue(state.shuffle, state.nexQue.slice(1)),
        currentTrack: state.music[action.jumpToIndex],
      });

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


    case 'UPDATE_AUDIO':
      return Object.assign( {}, state, {
        audioObject: Object.assign( {}, state.audioObject, {
          // currentTime: (action.tracking || state.audioObject.currentTime), ACK
          src: state.currentTrack.source,
          // volume: (action.volume || state.audioObject.volume) ACK
        })     
      });

    case 'VOLUME':
      return Object.assign( {}, state, {
        volume: action.volume
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


