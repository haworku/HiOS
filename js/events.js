APP.attachListeners = function(){

  // CONTROLS BASED ON USER MANIPULATION
  APP.view.controls.playPause.addEventListener('click', function(e){
    APP.view.play(!APP.state.playing);
    APP.player.play(!APP.state.playing);
    APP.state.playing = !APP.state.playing;
  });

  APP.view.controls.shuffle.addEventListener('click', function(e){
    APP.view.shuffle(!APP.state.shuffle);
    APP.state.shuffle = !APP.state.playing;
    // renderTrackList based on shuffle status
  });

  APP.view.controls.loop.addEventListener('click', function(e){
    APP.view.loop(!APP.state.loop);
    APP.state.loop = !APP.state.loop;
  });
// APP.attachListeners(); 
// 