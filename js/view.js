var View = function () {
  this.HTML = '<p> The HTML Skeleton</p';
};

View.prototype.buildHTML = function () {
  document.querySelector('body').appendChild('<div id="hios-main-container"></div>');
  document.querySelector('hios-app-container').innerHTML = this.HTML;
};

View.protoype.addSelectors = function(){
  this.mini = document.querySelector('#hios-mini');
  this.full = document.querySelector('#hios-full');

  this. controls = {
    playPause:  document.querySelector('.hios-play-pause'),
    next: document.querySelector('.hios-next'),
    previous: document.querySelector('.hios-previous'),
    shuffle: document.querySelector('.hios-shuffle'),
    loop: document.querySelector('.hios-loop'),
    volumeSlider: document.querySelector('.hios-volume'),
    trackingSlider: document.querySelector('.hios-tracking'),
    mini: document.querySelector('#hios-minify'),
    full: document.querySelector('#hios-fullify'),
    trackList: document.querySelectorAll('.track')
  };

  this.trackInfo = {
    title: document.querySelector('.hios-song-title'),
    artist: document.querySelector('.hios-song-artist'),
    image: document.querySelector('.hios-thumbnail')
  };
};

View.prototype.play = function (bool, options){
  // document.querySelector('.play-pause') swap between play and pause based on bool
  // if options {repeat: true} restart currentTrack
};

View.prototype.shuffle = function (bool){
  // toggle higlight class on shuffle button
};

View.prototype.loop = function (bool){
  // toggle higlight class on loopbutton
};


View.prototype.swapSkin = function(cssSelector) {
  // fade out .active skin, add .active class to document.querySelector(cssSelector)
};

View.prototype.adjustVolumeSlider = function(number) {
  // move volume to number location
};

View.prototype.adjustTrackingSlider = function(number) {
  // move tracking to number location
};

View.prototype.renderTrackList= function(currentTrack) {
  // rerender currentTrack title, image, artice
};

View.prototype.renderCurrentTrack = function(trackList) {
  // rerender tracks in trackList order
};