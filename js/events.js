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
 APP.player.audio.addEventListener('play', function(e){
    // console.log(e);
  });

  APP.player.audio.addEventListener('pause', function(e) {
    // console.log(e);
  });

  APP.player.audio.addEventListener('ended', function(e) {
    APP.handleEvent('next');
    // console.log(e);
  });

  APP.player.audio.addEventListener('timeupdate', function(e){
    // console.log(e);
    // console.log(APP.player.audio.currentTime);
  });

  APP.player.audio.addEventListener('volumechange', function(e){
    // console.log(e);
  });

 // BACKGROUND LISTENERS
// state listener for any changes on state.completedQue - renderTrackList() based on changes, IF length == 0 and state.loop == true, move completeQue to nextQue and render trackList
// state listener for any change on state.currentTrack - adjust player.track, then player.play(state.playing) and view.renderTrack()
};

APP.attachListeners(); 

APP.handleEvent = function (event) {
  switch (event){
    case 'play':
      APP.view.play(true);
      APP.player.play(true);
      APP.state.playing = true;
      break;
    case 'pause':
      APP.view.play(false);
      APP.player.play(false);
      APP.state.playing = false;
      break;
    case 'next':
      APP.state.completedQue.shift(APP.state.currentTrack);
      APP.state.currentTrack =  APP.state.nextQue.unshift(0);
      APP.player.play(APP.state.playing, {from: 0});
      break;
    case 'previous':
      APP.nextQue.shift(APP.state.currentTrack);
      APP.state.currentTrack =  APP.state.completedQue.unshift();
      APP.player.play(APP.state.playing, {from: 0});
      break;
    case 'replay':
      APP.player.play(APP.state.playing, {from: 0})
      break;
    case 'shuffle':
      APP.view.shuffle(!APP.state.shuffle);
      APP.state.shuffle = !APP.state.playing;
      // renderTrackList based on shuffle status
      break;
    case 'loop':
      APP.view.loop(!APP.state.loop);
      APP.state.loop = !APP.state.loop;
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