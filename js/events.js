APP.attachListeners = function(){

  // CONTROLS BASED ON USER MANIPULATION
  APP.view.controls.playPause.addEventListener('click', function(e){
    APP.view.play(!APP.state.playing);
    APP.player.play(!APP.state.playing);
    APP.state.playing = !APP.state.playing;
  });

// APP.attachListeners(); 
// 