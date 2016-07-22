APP.attachListeners = function(){

  //LISTENING FOR: USER MANIPULATION
  APP.view.selectors.playPause.forEach(function (selector){
    selector.addEventListener('click', function (e){
      e.preventDefault();
      APP.state.playing ? APP.handleEvent('pause') : APP.handleEvent('play');
    });
  });
  
  APP.view.selectors.next.forEach(function (selector){
    selector.addEventListener('click', function (e){
    e.preventDefault();
    APP.handleEvent('next');
    });
  });

  APP.view.selectors.previous.forEach(function (selector){
    selector.addEventListener('click', 'doubleclick', function(e){
      e.preventDefault();
      APP.handleEvent('replay');
      // if double click handleEvent('previous')
    });
  });


  APP.view.selectors.shuffle.addEventListener('click', function(e){
    e.preventDefault();
    APP.handleEvent('shuffle');
  });

  APP.view.selectors.loop.addEventListener('click', function(e){
    e.preventDefault();
    APP.handleEvent('loop');
  });

  APP.view.selectors.minify.addEventListener('click', function(e){
    APP.view.swapSkin('mini');
  });

  APP.view.selectors.fullify.addEventListener('click', function(e){
   APP.view.swapSkin('full');
  });

// TO DO 
// volume drag and tracking drag- player.volume or player.currentTime should update
// any click on trackList-  state.currentTrack, state.completedQue, state.nextQue should update

// LISTENING FOR: AUDIO PLAYER EVENTS
 APP.player.audio.addEventListener('play', (e) =>  {
    console.log(e);
  });

  APP.player.audio.addEventListener('pause', (e) =>  {
    console.log(e);
  });

  APP.player.audio.addEventListener('ended', (e) => {
    console.log(e);
  });

  APP.player.audio.addEventListener('timeupdate', (e) => {
    console.log(e);
    console.log(APP.player.audio.currentTime);
  });

  APP.player.audio.addEventListener('volumechange', (e) => {
    console.log(e);
  });
// ALSO, BACKGROUND LISTENERS
// player/web audio listener for song complete - state.currentTrack, state.completedQue, state.nextQue should update
// state listener for any changes on state.completedQue - renderTrackList() based on changes, IF length == 0 and state.loop == true, move completeQue to nextQue and render trackList
// state listener for any change on state.currentTrack - adjust player.track, then player.play(state.playing) and view.renderTrack()
};

APP.attachListeners(); 

APP.handleEvent =function (event) {
  switch event{
    case 'play':

      break;
    case 'pause':
      break;
    case 'ended':
      break;
    case 'timeupdate':
      break;
    case 'volumechange':
      break;

    default: 
      console.log('default')
      break;
  }
}
// 