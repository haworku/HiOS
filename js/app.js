var APP = {};

APP.view = new View;
APP.view.buildHTML();

APP.state = { 
  completeQue: [], 
  nextQue: music, 
  currentTrack: music[0], 
  playing: true, 
  shuffle: false, 
  loop: false 
};

// APP.attachListeners();
APP.player = new AudioPlayer;
APP.player.play(true);
