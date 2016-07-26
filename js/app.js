'use strict';
var APP = {};

APP.state = { 
  completeQue: [], 
  nextQue: music, 
  currentTrack: {}, 
  playing: true, 
  shuffle: false, 
  loop: false 
};
APP.state.currentTrack =  APP.state.nextQue.shift();

APP.view = new View;
APP.view.buildHTML();
APP.view.defineSelectors();
APP.view.populateCurrentTrack(APP.state.currentTrack);

APP.player = Object.create(audioPlayer);
APP.player.audio = new Audio(APP.state.currentTrack.source);
APP.player.audio.play();

