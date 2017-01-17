const audioReducer = (state = 0, action){
  switch (action.type){
  	CASE 'LOAD_AUDIO':
      // var clone = Object.assign([], music);
      // put music in store and clone music for nextQue
      // store.currentTrack =  store.nextQue.shift();
      // APP.player.init(APP.state.currentTrack.source);
      console.log('load player')
      return state;

  	CASE 'PLAY':
      return state;
    CASE 'PAUSE':
      return state;
    CASE 'NEXT':
      return state;
    CASE 'PREVIOUS':
      return state;
    CASE 'RESTART':
      return state;
    CASE 'UPDATE_AUDIO':
      return state;
    default:
      return state;
  }
}