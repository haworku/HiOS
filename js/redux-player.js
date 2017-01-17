const audioReducer = (state = 0, action) => {
  switch (action.type){
  	case 'LOAD_AUDIO':
      // var clone = Object.assign([], music);
      // put music in store and clone music for nextQue
      // store.currentTrack =  store.nextQue.shift();
      // APP.player.init(APP.state.currentTrack.source);
      console.log('load player')
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