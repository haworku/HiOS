'use strict';
var hiosView = {
  buildHTML: function () {
  // document.querySelector('body').appendChild = '<div id="hios-main-container"></div>';
  // document.querySelector('#hios-main-container').innerHTML = this.HTML;
  }, 
  defineSelectors: function(){
    this.selectors = {
      appContainer: document.querySelector("#hios-app"),
      miniContainer: document.querySelector('#hios-mini'),
      fullContainer: document.querySelector('#hios-full'),
      playPause: [document.querySelector('.mini > .hios-play-pause'), document.querySelector('.full > .hios-play-pause')],
      next: [document.querySelector('.mini > .hios-next'), document.querySelector('.full > .hios-next')],
      previous: document.querySelector('.full > .hios-previous'),
      shuffle: document.querySelector('.hios-shuffle'),
      loop: document.querySelector('.hios-loop'),
      volumeSlider: document.querySelector('.hios-volume'),
      trackingSlider: document.querySelector('.hios-tracking'),
      trackingTimeProgress: document.querySelector('#hios-tracking-progress'),
      trackingTimeDuration: document.querySelector('#hios-tracking-duration'),
      minify: document.querySelector('#hios-minify'),
      fullify: document.querySelector('#hios-fullify'),
      trackList: document.querySelectorAll('.track'),
      title: [document.querySelector('.mini > .hios-song-title'), document.querySelector('.full > .hios-song-title')],
      artist: document.querySelector('.full > .hios-song-artist'),
      thumbnail: [document.querySelector('.mini > .hios-thumbnail'), document.querySelector('#hios-full >.hios-thumbnail'), document.querySelector('.track >.hios-thumbnail')]
    };
  },
  getContainer: function (){
    return this.selectors.appContainer;
  },
  populateCurrentTrack: function (currentTrack, duration) {
    this.selectors.title[0].innerHTML = currentTrack.title;
    this.selectors.title[1].innerHTML = currentTrack.title;
    this.selectors.artist.innerHTML = currentTrack.artist;
    
    this.selectors.thumbnail.forEach (function (img){
      img.setAttribute('src', currentTrack.image);
    });
  },
  getTime:function (t) {
    var m=~~(t/60), s=~~(t % 60);
    return (m<10?"0"+m:m)+':'+(s<10?"0"+s:s);
  },
  resetTrackingSlider: function (duration) {
    this.selectors.trackingSlider.setAttribute('max', duration);
    this.selectors.trackingTimeDuration.innerHTML = this.getTime(duration);
    this.selectors.trackingSlider.setAttribute('value', 0);
  },
  play: function (bool){
    if (bool) {
      this.selectors.playPause[0].setAttribute('src','static/images/controls/ios7-play.png');
      this.selectors.playPause[1].setAttribute('src','static/images/controls/ios7-play.png');
    } else {
      this.selectors.playPause[0].setAttribute('src' ,'static/images/controls/ios7-pause.png');
      this.selectors.playPause[1].setAttribute('src' ,'static/images/controls/ios7-pause.png');
    }
  },
  shuffle: function (bool){
    bool ? this.selectors.shuffle.className = 'hios-shuffle hios-activated' : this.selectors.shuffle.className = 'hios-shuffle';
  },
  loop: function (bool){
    bool ? this.selectors.loop.className = 'hios-loop hios-activated' : this.selectors.loop.className = 'hios-loop';
  },
  tracking: function(currentTime, duration) {
  // adjusts tracking based on user manipulation OR timechange
    this.selectors.trackingSlider.value = currentTime;
    this.selectors.trackingSlider.setAttribute('value', currentTime);
    this.selectors.trackingTimeProgress.innerHTML = APP.view.getTime(currentTime);
    this.selectors.trackingTimeDuration.innerHTML= "-" + APP.view.getTime(duration-currentTime);
  },
  swapSkin: function(skin) {
    document.querySelector('.hios-active').className = 'hios-inactive';
    var containerName = skin + 'Container';
    this.selectors[containerName].className = 'hios-active';
  },
  renderTrackList: function(nextQue) {
  // rerender track list array
  },
};