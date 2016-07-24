  // REFACTORING
  // state listener for any change on APP.state (adjusts player and the view immediately)
  //    - this would simplify APP.handleEvent() greatly, removing all references to player and view


APP.attachListeners = function(){

  //LISTENING FOR: USER MANIPULATION
  APP.view.selectors.playPause.forEach(function (selector){
    selector.addEventListener('click', function (e){
      e.preventDefault();
      APP.state.playing ? APP.player.audio.pause() :  APP.player.audio.play()
    });
  });
  
  APP.view.selectors.next.forEach(function (selector){
    selector.addEventListener('click', function (e){
      e.preventDefault();
      APP.handleEvent('next');
    });
  });

  APP.view.selectors.previous.forEach(function (selector){
    selector.addEventListener('click', function(e){
      e.preventDefault();
      APP.handleEvent('replay');
    });
  });

  APP.view.selectors.previous.forEach(function (selector){
    selector.addEventListener('dblclick', function(e){
      e.preventDefault();
      APP.handleEvent('previous');
    });
  });

  APP.view.selectors.shuffle.addEventListener('click', function(e){
    e.preventDefault();
    APP.handleEvent('shuffle');
  });

  APP.view.selectors.loop.addEventListener('click', function(e){
    e.preventDefault();
    console.log('what')
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
    APP.handleEvent('play'); 
  });

  APP.player.audio.addEventListener('pause', function(e) {
    // console.log(e);
    APP.handleEvent('pause');
  });

  APP.player.audio.addEventListener('ended', function(e) {
    APP.handleEvent('next');
    // console.log(e);
  });

  APP.player.audio.addEventListener('timeupdate', function(e){
    // console.log(e);
    // updates slider
     
  });

  APP.player.audio.addEventListener('volumechange', function(e){
    // console.log(e);
    // updates slider
  });

};

APP.attachListeners(); 

APP.handleEvent = function (event) {
  switch (event){
    case 'play':
      APP.state.playing = true;
      APP.view.play(true);
      APP.view.populateSliders(parseInt(APP.player.audio.duration,10));
      break;

    case 'pause':
      APP.view.play(false);
      APP.state.playing = false;
      break;

    case 'next':
      APP.state.completeQue.unshift(APP.state.currentTrack);
      APP.state.currentTrack =  APP.state.nextQue.shift();
      APP.player.update({time: 0, source: APP.state.currentTrack.source});
      APP.view.populateCurrentTrack(APP.state.currentTrack);
      APP.state.playing ? APP.player.audio.play() : APP.player.audio.pause()
      break;

    case 'previous':
      if (APP.state.completeQue.length > 0) {
        APP.state.nextQue.unshift(APP.state.currentTrack);
        APP.state.currentTrack =  APP.state.completeQue.shift();
        APP.player.update({time: 0, source: APP.state.currentTrack.source});
        APP.view.populateCurrentTrack(APP.state.currentTrack);
      } else {
        APP.handleEvent('replay');
      }
      APP.state.playing ? APP.player.audio.play() : APP.player.audio.pause()
      break;

    case 'replay':
      APP.player.play(APP.state.playing, {time: 0});
      break;

    case 'shuffle':
      APP.state.shuffle = !APP.state.shuffle;
      APP.view.shuffle(APP.state.shuffle);
      // APP.nextQue.shuffle()
      // renderTrackList based on shuffle status
      break;

    case 'loop':
      APP.state.loop = !APP.state.loop;
      APP.player.audio.loop = APP.state.loop;
      APP.view.loop(APP.state.loop);
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