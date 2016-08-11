'use strict';
var hiosView = function () {
  var selectors, trackHTML, appHTML, getTime, populateCurrentTrack;

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
      selectors = {
        appContainer: document.querySelector('#hios-app'),
        miniContainer: document.querySelector('#hios-mini'),
        fullContainer: document.querySelector('#hios-full'),
        playPause: [document.querySelector('.mini > .hios-play-pause'), document.querySelector('.full > .hios-play-pause')],
        next: [document.querySelector('.mini > .hios-next'), document.querySelector('.full > .hios-next')],
        previous: document.querySelector('.full > .hios-previous'),
        shuffle: document.querySelector('.hios-shuffle'),
        loop: document.querySelector('.hios-loop'),
        volume: document.querySelector('.hios-volume'),
        tracking: document.querySelector('.hios-tracking'),
        trackingTimeProgress: document.querySelector('#hios-tracking-progress'),
        trackingTimeDuration: document.querySelector('#hios-tracking-duration'),
        minify: document.querySelector('#hios-minify'),
        fullify: document.querySelector('#hios-fullify'),
        trackList: document.querySelector('#hios-track-list'),
        title: [document.querySelector('.mini > .hios-song-title'), document.querySelector('.full > .hios-song-title')],
        artist: document.querySelector('.full > .hios-song-artist'),
        thumbnail: [document.querySelector('.mini > .hios-thumbnail'), document.querySelector('#hios-full > .hios-artwork-container > .hios-artwork')],
        trackList: document.querySelector('#hios-track-list'),
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
    updateTrackList: function(action, options) {
      var list = selectors.trackList
      switch (action){
        case 'removeTrack':
          if (options.track){
            list.removeChild(list.childNodes[0]);
          };
          break;
        case 'addTrack':
          if (options.track && options.add){
            var node =  document.createElement('div');
            node.className = 'hios-track';
            node.setAttribute('data-state', 'next');
            node.innerHTML = trackHTML;
            node.querySelector('.hios-song-title').innerHTML = options.add.title;
            node.querySelector('.hios-song-artist').innerHTML = options.add.artist;
            node.querySelector('.hios-thumbnail').setAttribute('src', options.add.image);
            list.insertBefore(node, list.firstChild);
          };
          break;
        case 'renderAll':
          if (options.track && options.que){
            list.innerHTML = '';
            options.que.forEach(function (track){
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
          break;
        default:
          console.log('idk')
        break;
      }
      populateCurrentTrack(options.track) 
    },
  };
};