var APP = {};

APP.view = Object.create(View);
// APP.view.buildHTML();

APP.state = { 
  completeQue: [], 
  nextQue: music, 
  currentTrack: music[0], 
  playing: true, 
  shuffle: false, 
  loop: false 
};

APP.player = Object.create(AudioPlayer);
// APP.player.play(true, {fromBeginning: true});
