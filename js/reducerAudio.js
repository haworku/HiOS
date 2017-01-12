const audioControlsReducer = (state = 0, action){
  switch (action.type){
  	CASE 'LOAD_PLAYER':
      return state;

  	CASE 'PLAY':
      return state;
    CASE 'PAUSE':
      return state;
    CASE 'NEXT':
      return state;
    CASE 'PREVIOUS':
      return state;
    default return state;
  }
}