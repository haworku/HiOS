var APP = {};

APP.state = { 
  completeQue: [], 
  nextQue: music, 
  currentTrack: music[0], 
  playing: true, 
  shuffle: false, 
  loop: false 
};

APP.view = new View;
APP.view.buildHTML();
APP.view.defineSelectors();
APP.view.populateCurrentTrack(APP.state.currentTrack);

APP.player = new AudioPlayer(APP.state.currentTrack);
APP.player.play(true);
