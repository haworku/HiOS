var APP = {};

APP.view = new View;
APP.view.buildHTML();
APP.view.defineSelectors();

APP.state = { 
  completeQue: [], 
  nextQue: music, 
  currentTrack: music[0], 
  playing: true, 
  shuffle: false, 
  loop: false 
};

APP.player = new AudioPlayer;
APP.player.play(true);
