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

APP.player = new AudioPlayer(APP.state.currentTrack.source);
APP.player.play(true);
