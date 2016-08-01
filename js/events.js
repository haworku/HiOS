// TO DO 
  // loop track versus loop playlist
  // renderTrackList
  // any click on trackList-  state.currentTrack, state.completedQue, state.nextQue should update
'use strict';

APP.attachListeners = function(e){
 
  // USER MANIPULATION
  var container = APP.view.getContainer();

  container.addEventListener('click', function (e){
    APP.handleEvent(e);
  }, false);

  container.addEventListener('dbclick', function (e){
    APP.handleEvent(e);
  }, false);

  // AUDIO PLAYER 
  APP.player.audio().addEventListener('loadedmetadata', function(e){
    // wait to set tracking sliders until duration data loads
    APP.view.resetTracking(parseInt(APP.player.audio().duration,10)); 
  }); 

  APP.player.audio().addEventListener('ended', function(e) {
    APP.handleEvent('next');
  });

  APP.player.audio().addEventListener('timeupdate', function(e){
    // dynamically update tracking slider, progress, and duration display as song plays
    APP.view.tracking(parseInt(APP.player.audio().currentTime, 10), parseInt(APP.player.audio().duration, 10)); 
  });

};

APP.attachListeners(); 

APP.handleEvent = function (e) {
  // console.log(e)
  var target = e.target || e.srcElement;

  if (e.preventDefault) e.preventDefault();
  
  switch (target.getAttribute('data-state')){
    case 'playpause':
      if (APP.state.playing) {
        APP.view.play(false);
      } else {
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

      break;

    case 'previous':
      if (e.type == 'click' && APP.state.completeQue.length > 0){ 
       // if single click and there are previous tracks, go back one song
        APP.state.nextQue.unshift(APP.state.currentTrack);
        APP.state.currentTrack =  APP.state.completeQue.shift();
        APP.player.update({time: 0, source: APP.state.currentTrack.source});
        APP.view.populateCurrentTrack(APP.state.currentTrack);
        APP.view.renderTrackList(APP.state.nextQue);
      } else {
      // otherwise replay current song
        APP.player.update(APP.state.playing, {time: 0});
      }

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
      APP.player.audio().loop = APP.state.loop;
      APP.view.loop(APP.state.loop);

      break;

    case 'tracking':
      APP.player.audio().currentTime = APP.view.getSelectorProperty('tracking', 'value');
      // the rest is adjusted through audio player listneners
      break;

    case 'volume':
      APP.player.audio().volume = APP.view.getSelectorProperty('volume', 'value');
      APP.state.volume = APP.player.audio().volume;

      break;
    case 'swap':
      target.getAttribute('id') == 'hios-minify' ? APP.view.swapSkin('mini') : APP.view.swapSkin('full');

      break;
 
    default: 
      console.log('default');
      break;
  }
  APP.player.play(APP.state.playing); //player remains played or paused
};