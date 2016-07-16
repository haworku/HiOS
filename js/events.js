APP.attachListeners = function(){

  // CONTROLS BASED ON USER MANIPULATION
  APP.view.selectors.playPause.addEventListener('click', function(e){
    APP.view.play(!APP.state.playing);
    APP.player.play(!APP.state.playing);
    APP.state.playing = !APP.state.playing;
  });

/*
  APP.view.selectors.shuffle.addEventListener('click', function(e){
    APP.view.shuffle(!APP.state.shuffle);
    APP.state.shuffle = !APP.state.playing;
    renderTrackList based on shuffle status
  });

  APP.view.selectors.loop.addEventListener('click', function(e){
    APP.view.loop(!APP.state.loop);
    APP.state.loop = !APP.state.loop;
  });
  */

  APP.view.selectors.minify.addEventListener('click', function(e){
    APP.view.swapSkin('mini');
  });

  APP.view.selectors.fullify.addEventListener('click', function(e){
   APP.view.swapSkin('full');
  });

// TO DO 
// volume drag and tracking drag- player.volume or player.currentTime should update
// next and previous - state.currentTrack, state.completeQue, and state.nextQue should update
// any click on trackList-  state.currentTrack, state.completedQue, state.nextQue should update


// ALSO, BACKGROUND LISTENERS
// player/web audio listener for song complete - state.currentTrack, state.completedQue, state.nextQue should update
// state listener for any changes on state.completedQue - renderTrackList() based on changes, IF length == 0 and state.loop == true, move completeQue to nextQue and render trackList
// state listener for any change on state.currentTrack - adjust player.track, then player.play(state.playing) and view.renderTrack()
};

APP.attachListeners(); 
// 