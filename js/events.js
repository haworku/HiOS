// REFACTORING
  // state listener for any change on APP.state (adjusts player and the view immediately)
  //    - this would simplify APP.handleEvent() greatly, removing all overlapping references to player and view

// TO DO 
  // loop track versus loop playlist
  // renderTrackList
  // any click on trackList-  state.currentTrack, state.completedQue, state.nextQue should update
'use strict';

APP.attachListeners = function(){

  // USER MANIPULATION
  APP.view.selectors.playPause.forEach(function (selector){
    selector.addEventListener('click', function (e){
      e.preventDefault();
      APP.handleEvent('playpause');
    });
  });
  
  APP.view.selectors.next.forEach(function (selector){
    selector.addEventListener('click', function (e){
      e.preventDefault();
      APP.handleEvent('next');
    });
  });

  APP.view.selectors.previous.addEventListener('click', function(e){
    e.preventDefault();
    APP.handleEvent('replay');
  });

  APP.view.selectors.previous.addEventListener('dblclick', function(e){
    e.preventDefault();
    APP.handleEvent('previous');
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

  APP.view.selectors.volumeSlider.addEventListener('change', function(e){
    APP.handleEvent('volume');
  })

  APP.view.selectors.trackingSlider.addEventListener('change', function(e){
    APP.handleEvent('tracking');
  });

// AUDIO PLAYER EVENTS
// -wait to set tracking sliders until duration data has loaded
// -play next song when song ends
// -dynamically update tracking slider, progress, and duration display as song plays
  APP.player.audio.addEventListener('loadedmetadata', function(e){
    APP.view.resetTrackingSlider(parseInt(APP.player.audio.duration,10));
  }); 

  APP.player.audio.addEventListener('ended', function(e) {
    APP.handleEvent('next');
  });

  APP.player.audio.addEventListener('timeupdate', function(e){
    e.preventDefault();
    APP.view.tracking(parseInt(APP.player.audio.currentTime, 10), parseInt(APP.player.audio.duration, 10));
  });

};

APP.attachListeners(); 

APP.handleEvent = function (event) {
  switch (event){
    case 'playpause':
      if (APP.state.playing) {
        APP.player.audio.pause(); 
        APP.view.play(false);
      } else {
        APP.player.audio.play();
        APP.view.play(true);
      }
      APP.state.playing = !APP.state.playing;

      break;

    case 'next':
      APP.state.completeQue.unshift(APP.state.currentTrack);
      APP.state.currentTrack =  APP.state.nextQue.shift();
      APP.player.update({time: 0, source: APP.state.currentTrack.source});
      APP.view.populateCurrentTrack(APP.state.currentTrack);
      APP.view.renderTrackList(APP.state.nextQue);
      if (APP.state.playing) APP.player.audio.play();

      break;

    case 'previous':
      if (APP.state.completeQue.length > 0) {
        APP.state.nextQue.unshift(APP.state.currentTrack);
        APP.state.currentTrack =  APP.state.completeQue.shift();
        APP.player.update({time: 0, source: APP.state.currentTrack.source});
        APP.view.populateCurrentTrack(APP.state.currentTrack);
        APP.view.renderTrackList(APP.state.nextQue);
        if (APP.state.playing) APP.player.audio.play(); 
      } else {
        APP.handleEvent('replay');
      }
     
      break;

    case 'replay':
      APP.player.update(APP.state.playing, {time: 0});
      if (APP.state.playing) APP.player.audio.play();

      break;

    case 'shuffle':
      APP.state.shuffle = !APP.state.shuffle;
      APP.view.shuffle(APP.state.shuffle);
      if (APP.state.shuffle) {
        APP.state.nextQue = APP.state.nextQue.hiosShuffle();
        APP.view.renderTrackList(APP.state.nextQue);
      }
      break;

    case 'loop':
      APP.state.loop = !APP.state.loop;
      APP.player.audio.loop = APP.state.loop;
      APP.view.loop(APP.state.loop);

      break;

    case 'tracking':
      APP.player.audio.currentTime = APP.view.selectors.trackingSlider.value;
      // the rest is adjusted through audio player listneners
      break;

    case 'volume':
      APP.player.audio.volume = APP.view.selectors.volumeSlider.value;
      APP.state.volume = APP.player.audio.volume;

      break;
    default: 
      console.log('default');
      break;
  }
};