APP.attachListeners = function(){

  //LISTENING FOR: USER MANIPULATION
  
    // Play/Pause: Toggle button icon and wether or not currentTrack is playing
  APP.view.selectors.playPause.addEventListener('click', function(e){
    e.preventDefault();
    APP.view.play(!APP.state.playing);
    APP.player.play(!APP.state.playing);
    APP.state.playing = !APP.state.playing;
  });
  
    // Next: single click plays nextQue[0]
  APP.view.selectors.next.addEventListener('click', function(e){
    e.preventDefault();
    APP.state.completedQue.shift(APP.state.currentTrack);
    APP.state.currentTrack =  APP.state.nextQue.unshift(0);
    APP.player.play(APP.state.playing, {from: 0});
  });

    // Previous: single click replays current song
  APP.view.selectors.previous.addEventListener('click', function(e){
    e.preventDefault();
    APP.player.play(APP.state.playing, {from: 0});
  });

    // Previous: double click plays completedQue[0]
  APP.view.selectors.previous.addEventListener('doubleclick', function(e){
    e.preventDefault();
    APP.nextQue.shift(APP.state.currentTrack);
    APP.state.currentTrack =  APP.state.completedQue.unshift();
    APP.player.play(APP.state.playing, {from: 0});
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
// any click on trackList-  state.currentTrack, state.completedQue, state.nextQue should update


// ALSO, BACKGROUND LISTENERS
// player/web audio listener for song complete - state.currentTrack, state.completedQue, state.nextQue should update
// state listener for any changes on state.completedQue - renderTrackList() based on changes, IF length == 0 and state.loop == true, move completeQue to nextQue and render trackList
// state listener for any change on state.currentTrack - adjust player.track, then player.play(state.playing) and view.renderTrack()
};

APP.attachListeners(); 
// 