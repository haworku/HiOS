'use strict';
var hiosView = function () {
  var selectors, trackHTML, getTime, populateCurrentTrack;

  selectors = {};

  trackHTML = 
      `<img class="hios-thumbnail" src="/static/images/lemonade.jpg">
        <div class="hios-info">
          <div class="hios-song-title">adfd</div>
          <div class="hios-song-artist">dasfasdf</div>
        </div>`;

  getTime = function (t) {
    var m=~~(t/60), s=~~(t % 60);
    return (m<10?"0"+m:m)+':'+(s<10?"0"+s:s);
  };

  populateCurrentTrack = function (currentTrack) {
    console.log(currentTrack);
    selectors.title[0].innerHTML = currentTrack.title;
    selectors.title[1].innerHTML = currentTrack.title;
    selectors.artist.innerHTML = currentTrack.artist;
    
    selectors.thumbnail.forEach (function (img){
      img.setAttribute('src', currentTrack.image);
    });
  };

  return { 
    buildHTML: function () {
    // document.querySelector('body').appendChild = '<div id="hios-main-container"></div>';
    // document.querySelector('#hios-main-container').innerHTML = this.HTML;
    }, 
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
    resetTracking: function (duration) {
      selectors.tracking.setAttribute('max', duration);
      selectors.trackingTimeDuration.innerHTML = getTime(duration);
      selectors.tracking.setAttribute('value', 0);
    },
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
     * 
     * @param  {Boolean} shuffling 
     */
    shuffle: function (shuffling) {
      selectors.shuffle.className = shuffling === true ? 'hios-shuffle hios-activated' : 'hios-shuffle';
    },
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
    tracking: function(currentTime, duration) {
    // adjusts tracking based on user manipulation OR timechange
      selectors.tracking.value = currentTime;
      selectors.tracking.setAttribute('value', currentTime);
      selectors.trackingTimeProgress.innerHTML = getTime(currentTime);
      selectors.trackingTimeDuration.innerHTML= '-' + getTime(duration-currentTime);
    },
    swapSkin: function(skin) {
      document.querySelector('.hios-active').className = 'hios-inactive';
      var containerName = skin + 'Container';
      selectors[containerName].className = 'hios-active';
    },
    updateTrackList: function(action, options) {
      var list = selectors.trackList
      switch (action){
        case 'removeTrack':
          if (options.track){
            console.log(list)
            list.removeChild(list.childNodes[0]);
          };
          break;
        case 'addTrack':
          if (options.track && options.add){
            var node =  document.createElement('div');
            node.className = 'hios-track';
            node.innerHTML = trackHTML;
            node.querySelector('.hios-song-title').innerHTML = options.add.title;
            node.querySelector('.hios-song-artist').innerHTML = options.add.artist;
            node.querySelector('.hios-thumbnail').setAttribute('src', options.add.image);
            console.log('node', node)
            list.insertBefore(node, list.firstChild);
          };
          break;
        case 'renderAll':
          if (options.track && options.que){
            list.innerHTML = '';
            options.que.forEach(function (track){
              var node =  document.createElement('div');
              node.className = 'hios-track';
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

      populateCurrentTrack(options.track) //whenever track list updates, current track display updates
    },
  };
};