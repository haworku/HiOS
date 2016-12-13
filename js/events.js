
/*global APP*/
'use strict';
APP.mousedown = false;

APP.attachListeners = function(e){

  // USER MANIPULATION
  var container = APP.view.getContainer();

  document.addEventListener('click', function (e){
    if( !e.target.getAttribute('data-state') ){
      APP.handleEvent('swap');
    }else{
      APP.handleEvent(e);
    }
  }, false);

  container.addEventListener('mousedown', function (e){
    console.log('mousedown');
    APP.mousedown = true;
  }, false);

  container.addEventListener('mouseup', function (e){
    APP.mousedown = false;
  }, false);

  container.addEventListener('dragstart', function(e){
    if (e.target.getAtrribute('id') === 'hios-mini') APP.view.dragging(e.target, 'start');
  }, false);

  container.addEventListener('dragend', function(e){
    if (e.target.getAtrribute('id') === 'hios-mini') APP.view.dragging(e.target, 'over');
  }, false);

  container.addEventListener('drop', function(e){
    if (e.target.getAtrribute('id') === 'hios-mini') APP.view.dragging(e.target, 'drop');
  }, false);

  // AUDIO PLAYER
  APP.player.audio().addEventListener('loadedmetadata', function(e){
    // wait to set tracking until duration data loads
    APP.view.resetTracking(parseInt(APP.player.audio().duration,10));
  });

  APP.player.audio().addEventListener('ended', function(e) {
    APP.handleEvent('next');
  });

  APP.player.audio().addEventListener('timeupdate', function(e){
    // dynamically update tracking as song plays
    if (APP.mousedown == false)
      APP.view.tracking(
        parseInt(APP.player.audio().currentTime, 10), parseInt(APP.player.audio().duration, 10)
      );
  });

};

APP.attachListeners();

APP.handleEvent = function (e) {
  console.log('music', APP.state.music);
  if (e.preventDefault) e.preventDefault();

  // event element  - will be undefined if parameter is not event object
  var target = e.target || e.srcElement;

  // if event, get data-state, else directly assign parameter to string variable
  var string = target ? target.getAttribute('data-state') : e;

  switch (string){
    case 'playpause':
      if (APP.state.playing) {
        APP.view.play(false);
      } else {
        APP.view.play(true);
      }
      APP.state.playing = !APP.state.playing;

      break;

    case 'next':
      // if triggered by click on track list, jump to that track
      if (target && target.getAttribute('class') == 'hios-track') {
        var index = APP.view.getTrackIndex(target);
        var oldIndex = APP.state.currentTrack.id - 1;
        APP.state.completeQue.unshift(APP.state.currentTrack);
        APP.state.currentTrack =  APP.state.music[index];
        APP.state.nextQue = APP.state.nextQue.splice(oldIndex + (index - oldIndex), APP.state.nextQue.length -1);
        APP.player.update({time: 0, source: APP.state.currentTrack.source});
        APP.view.updateTrackList({track: APP.state.currentTrack});
      } else if (APP.state.nextQue.length > 0) { // if more songs left
        APP.state.completeQue.unshift(APP.state.currentTrack);
        APP.state.currentTrack =  APP.state.nextQue.shift();
        APP.player.update({time: 0, source: APP.state.currentTrack.source});
        APP.view.updateTrackList({track: APP.state.currentTrack});
      } else if (APP.state.loopAll) { //if no more songs left but looping playlist
        APP.reset();
        APP.view.updateTrackList({music: APP.state.nextQue, track: APP.state.currentTrack});
        APP.player.update({source:APP.state.currentTrack.source, volume: .5, currentTime: 0});
      } else {
          console.log('no more songs');
      }

      break;

    case 'previous':
      if (APP.state.completeQue.length === 0 || APP.player.justStarted() === false ){
        APP.player.update(APP.state.playing, {time: 0}); // replay current song
      } else {
        APP.state.nextQue.unshift(APP.state.currentTrack);   // go back one song
        APP.state.currentTrack =  APP.state.completeQue.shift();
        APP.view.updateTrackList({track: APP.state.currentTrack});
        APP.player.update({time: 0, source: APP.state.currentTrack.source});
      }

      break;

    case 'shuffle':
      APP.state.shuffle = !APP.state.shuffle;
      APP.view.shuffle(APP.state.shuffle);
      if (APP.state.shuffle) {
        APP.reset();
        APP.state.nextQue = APP.state.nextQue.hiosShuffle();
      } else {
        APP.view.updateTrackList({track: APP.state.currentTrack, music: APP.state.music});
      }
      break;

    case 'loop':
      if (!APP.state.loopCurrent && !APP.state.loopAll){
        // first click loops current track
        APP.state.loopCurrent = true;
        APP.player.audio().loop = APP.state.loopCurrent;
        APP.view.loop('current');
      } else if (!APP.state.loopAll) {
      // second click loops entire playlist
        APP.state.loopCurrent = false;
        APP.state.loopAll = true;
        APP.view.loop('all');
        // APP.view.loopAll(APP.state.loopAll);
        console.log(APP.state.loopAll);
      }else{
        //third click turns off all looping
        APP.state.loopCurrent = false;
        APP.state.loopAll = false;
        APP.view.loop(null);
      }

      break;

    case 'tracking':  // audio player listneners also at work here
        APP.player.audio().currentTime = APP.view.getSelectorProperty('tracking', 'value');

      break;

    case 'volume':
      APP.player.audio().volume = APP.view.getSelectorProperty('volume', 'value');
      APP.state.volume = APP.player.audio().volume;

      break;
    case 'swap':
      if (target && target.getAttribute('id') == 'hios-minify'){
        APP.view.swapSkin('mini');
      }else{
        APP.view.swapSkin('full');
      }

      break;

    default:
      console.log('default');
      break;
  }
  APP.player.play(APP.state.playing); //player remains played or paused
};