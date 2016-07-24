var View = function () {
  this.HTML = '<p> The HTML Skeleton</p';
};

View.prototype.buildHTML = function () {
  // document.querySelector('body').appendChild = '<div id="hios-main-container"></div>';
  // document.querySelector('#hios-main-container').innerHTML = this.HTML;
};

View.prototype.defineSelectors = function(){
  this.selectors = {
    miniContainer: document.querySelector('#hios-mini'),
    fullContainer: document.querySelector('#hios-full'),
    playPause: [document.querySelector('.mini > .hios-play-pause'), document.querySelector('.full > .hios-play-pause')],
    next: [document.querySelector('.mini > .hios-next'), document.querySelector('.full > .hios-next')],
    previous: [document.querySelector('.mini > .hios-previous'), document.querySelector('.full > .hios-previous')],
    shuffle: document.querySelector('.hios-shuffle'),
    loop: document.querySelector('.hios-loop'),
    volumeSlider: document.querySelector('.hios-volume'),
    trackingSlider: document.querySelector('.hios-tracking'),
    minify: document.querySelector('#hios-minify'),
    fullify: document.querySelector('#hios-fullify'),
    trackList: document.querySelectorAll('.track'),
    title: [document.querySelector('.mini > .hios-song-title'), document.querySelector('.full > .hios-song-title')],
    artist: [document.querySelector('.mini > .hios-song-artist'), document.querySelector('.full > .hios-song-artist')],
    thumbnail: [document.querySelector('#hios-mini > .hios-thumbnail'), document.querySelector('#hios-full >.hios-thumbnail'), document.querySelector('.track >.hios-thumbnail')]
  };
};

View.prototype.populateCurrentTrack = function (currentTrack) {
  this.selectors.title[0].innerHTML = currentTrack.title;
  this.selectors.title[1].innerHTML = currentTrack.title;
  this.selectors.artist[0].innerHTML = currentTrack.artist;
  this.selectors.artist[1].innerHTML = currentTrack.artist;
  this.selectors.thumbnail.forEach (function (img){
    console.log(img)
    img.setAttribute('src', currentTrack.image);
  });
};

View.prototype.play = function (bool){
  if (bool) {
    this.selectors.playPause[0].setAttribute('src','static/images/controls/ios7-play.png');
    this.selectors.playPause[1].setAttribute('src','static/images/controls/ios7-play.png');
  } else {
    this.selectors.playPause[0].setAttribute('src' ,'static/images/controls/ios7-pause.png');
    this.selectors.playPause[1].setAttribute('src' ,'static/images/controls/ios7-pause.png');
  }
};

View.prototype.shuffle = function (bool){
  // toggle higlight class on shuffle button
};

View.prototype.loop = function (bool){
  // toggle higlight class on loopbutton
};


View.prototype.swapSkin = function(skin) {
  console.log('swap')
  document.querySelector('.hios-active').className = 'hios-inactive';
  var containerName = skin + 'Container';
  this.selectors[containerName].className = 'hios-active';
  // fade out active skin fade in newly active skin.a
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