'use strict';
var hiosView = function () {
  var selectors, appHTML, trackHTML, getTime, populateCurrentTrack;

  selectors = {};

  // appHTML = 
  trackHTML = ` <img class="hios-thumbnail" src="/static/images/lemonade.jpg">
                <div class="hios-info">
                  <div class="hios-song-title">adfd</div>
                  <div class="hios-song-artist">dasfasdf</div>
                </div> `;


  getTime = function (t) {
    var m=~~(t/60), s=~~(t % 60);
    return (m<10?"0"+m:m)+':'+(s<10?"0"+s:s);
  };

  populateCurrentTrack = function (currentTrack) {
    selectors.title[0].innerHTML = currentTrack.title;
    selectors.title[1].innerHTML = currentTrack.title;
    selectors.artist.innerHTML = currentTrack.artist;
    
    selectors.thumbnail.forEach (function (img){
      img.setAttribute('src', currentTrack.image);
    });
  };

  return { 
    defineSelectors: function(){
      var container = document.querySelector('#hios-app')

      selectors = {
        appContainer: container,
        miniContainer: container.querySelector('#hios-mini'),
        fullContainer: container.querySelector('#hios-full'),
        playPause: [container.querySelector('.mini > .hios-play-pause'), container.querySelector('.full > .hios-play-pause')],
        next: [container.querySelector('.mini > .hios-next'), container.querySelector('.full > .hios-next')],
        previous: container.querySelector('.full > .hios-previous'),
        shuffle: container.querySelector('.hios-shuffle'),
        loop: container.querySelector('.hios-loop'),
        volume: container.querySelector('.hios-volume'),
        tracking: container.querySelector('.hios-tracking'),
        trackingTimeProgress: container.querySelector('#hios-tracking-progress'),
        trackingTimeDuration: container.querySelector('#hios-tracking-duration'),
        minify: container.querySelector('#hios-minify'),
        fullify: container.querySelector('#hios-fullify'),
        trackList: container.querySelector('#hios-track-list'),
        title: [container.querySelector('.mini > .hios-song-title'), container.querySelector('.full > .hios-song-title')],
        artist: container.querySelector('.full > .hios-song-artist'),
        thumbnail: [container.querySelector('.mini > .hios-thumbnail'), container.querySelector('#hios-full > .hios-artwork-container > .hios-artwork')],
        trackList: container.querySelector('#hios-track-list'),
      };
    },

    getContainer: function (){
      return selectors.appContainer;
    },
    getSelectorProperty: function (selector, property){
      return  selectors[selector][property];
    },
    getTrackIndex : function (element){
      return Array.prototype.indexOf.call(selectors.trackList.children, element);  
    },
    buildHTML: function () {
      // var node =  document.createElement('div');
      // node.className = 'hios-main-container';
      // node.innerHTML = appHTML;
    // document.querySelector('body').appendChild = node;
    }, 
    /**
     * resetTracking
     * adjust tracking slider to beginning position and tracking duration time display
     * called only once metadata has loaded
     * @param  {Number} duration
     */
    resetTracking: function (duration) {
      selectors.tracking.setAttribute('max', duration);
      selectors.trackingTimeDuration.innerHTML = getTime(duration);
      selectors.tracking.setAttribute('value', 0);
    },
    /**
     * play
     * switch play/pause button display 
     * @param  {Boolean} playing
     */
    play: function (playing){
      if (playing === true) {
        selectors.playPause[0].className = 'hios-play-pause icon-play';
        selectors.playPause[1].className = 'hios-play-pause icon-play';
      } else {
        selectors.playPause[0].className = 'hios-play-pause icon-pause';
        selectors.playPause[1].className = 'hios-play-pause icon-pause';
      }
    },
    /**
     * shuffle
     * toggle shuffle button on and off with timeout
     * @param  {Boolean} shuffling 
     */
    shuffle: function (shuffling) {
      selectors.shuffle.className = shuffling === true ? 'hios-shuffle hios-activated' : 'hios-shuffle';
    },
     /**
     * loop
     * toggle loop button depending on loop type, default: unactive
     * @param  {String} loopType
     */
    loop: function (loopType){
      switch (loopType){
        case 'current':
          console.log('loop current')
          selectors.loop.className = 'hios-loop hios-activated'
          break;
        case 'all':
          console.log('loop all')
          selectors.loop.className = 'hios-loop hios-activated'
          break;
        default:
          console.log('loop nothing')
          selectors.loop.className = 'hios-loop'
          break;
      }
    },
    /**
     * tracking
     * adjusts tracking based on user manipulation OR timechange
     * @param  {Number} currentTime, {Number} duration 
     */
    tracking: function(currentTime, duration) {
      selectors.tracking.value = currentTime;
      selectors.tracking.setAttribute('value', currentTime);
      selectors.trackingTimeProgress.innerHTML = getTime(currentTime);
      selectors.trackingTimeDuration.innerHTML= '-' + getTime(duration-currentTime);
    },
    /**
     * swapSkin
     * changes display visibility of mini and full player
     * @param  {String} skin
     */
    swapSkin: function(skin) {
      document.querySelector('.hios-active').className = 'hios-inactive';
      var containerName = skin + 'Container';
      selectors[containerName].className = 'hios-active';
    },
    /**
     * updateTrackList
     * re-renders all or part of track list based on action coming from event delegation
     * re-renders currently playing track with populateCurrentTrack private method
     * @param  {String} action, {Object} options hash
     */
    updateTrackList: function(options) {
      var list = selectors.trackList
      var nodeIndex = options.track.id - 1
      console.log(nodeIndex)
      console.log(list.childNodes)
      list.childNodes[nodeIndex].className = 'hios-track hios-playing'
    
        if (options.track && options.music){
          console.log(options.music)
          list.innerHTML = '';
          options.music.forEach(function (track){
            var node =  document.createElement('div');
            node.className = 'hios-track';
            node.setAttribute('data-state', 'next');
            node.innerHTML = trackHTML;
            node.querySelector('.hios-song-title').innerHTML = track.title;
            node.querySelector('.hios-song-artist').innerHTML = track.artist;
            node.querySelector('.hios-thumbnail').setAttribute('src', track.image);
            list.appendChild(node);
          })
        };
       
      populateCurrentTrack(options.track) 
    },
  };
};