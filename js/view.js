var View = function () {
  this.HTML = '<p> The HTML Skeleton</p';
};

View.prototype.buildHTML = function () {
  // document.querySelector('body').appendChild = '<div id="hios-main-container"></div>';
  // document.querySelector('#hios-main-container').innerHTML = this.HTML;
};

View.prototype.defineSelectors = function(){
  this.selectors = {
    playerContainers: document.querySelectorAll('.hios-player'),
    miniContainer: document.querySelector('#hios-mini'),
    fullContainer: document.querySelector('#hios-full'),
    playPause:  document.querySelector('.hios-play-pause'),
    next: document.querySelector('.hios-next'),
    previous: document.querySelector('.hios-previous'),
    shuffle: document.querySelector('.hios-shuffle'),
    loop: document.querySelector('.hios-loop'),
    volumeSlider: document.querySelector('.hios-volume'),
    trackingSlider: document.querySelector('.hios-tracking'),
    minify: document.querySelector('#hios-minify'),
    fullify: document.querySelector('#hios-fullify'),
    trackList: document.querySelectorAll('.track'),
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


View.prototype.swapSkin = function(skin) {
  var containerName = skin + 'Container';
  this.selectors[containerName].className = 'hios-active';
  // fade out .active skin fade in newly active skin
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