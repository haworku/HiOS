'use strict';
var APP = {};

APP.state = { 
  completeQue: [], 
  nextQue: music, 
  currentTrack: {}, 
  volume: .5,
  playing: true, 
  shuffle: false, 
  loop: false 
};
APP.state.currentTrack =  APP.state.nextQue.shift();

APP.view = Object.create(hiosView);
APP.view.buildHTML();
APP.view.defineSelectors();
APP.view.populateCurrentTrack(APP.state.currentTrack);

APP.player = Object.create(hiosPlayer);
APP.player.audio = new Audio(APP.state.currentTrack.source);
APP.player.audio.play({volume: .5});

