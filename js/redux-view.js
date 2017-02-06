'use strict';
console.log('loading view')

 hiosView = (eventHandler) => {
  selectors = {};
	appHTML =
    `
      <div id="hios-mini" draggable="true" class="hios-active animated slideInUp">
        <div class="hios-wrap mini">
          <img class="hios-thumbnail" src="/static/images/album_cover_Andrew_Fortnum.png">
          <div class="hios-song-title-box">
             <div class="hios-song-title"></div>
          </div>
          <div class="hios-audio mini">
              <i class="hios-play-pause icon-play" data-state="playpause" ></i>
              <i class="hios-next icon-skip-forward" data-state="next"></i>
          </div>
        </div>
      </div>

      <div id="hios-full" class="hios-inactive">
        <i id="hios-minify" class="icon-shrink" data-state="swap"></i>
        <div class="hios-artwork-container">
          <img class="hios-artwork" src="/static/images/album_cover_Andrew_Fortnum.png">
        </div>
        <div class="hios-controls full">
          <div class ="hios-progress">
            <input
              id= "hios-progress-tracking"
              class="hios-tracking"
              type="range"
              data-state="tracking"
              value= "0" min="0" max="100"
            >
            <div id="tracking-output">
              <output
                for="tracking"
                id="hios-progress-completed">
                1.00
              </output>
              <output
                for="tracking"
                id="hios-progress-duration">
                10.00
              </output>
            </div>
          </div>

          <div class ="hios-info full">
            <div class="hios-song-title"></div>
            <div class="hios-song-artist"></div>
          </div>

          <div class="hios-audio full">
            <i class="hios-control hios-previous icon-skip-back" data-state="previous" ></i>
            <i class="hios-control hios-play-pause icon-play" data-state="playpause" ></i>
            <i class="hios-control hios-next icon-skip-forward" data-state="next"></i>
          </div>

          <div class="hios-volume" full>
            <input
                id="hios-volume-tracking"
                class="hios-tracking"
                type="range"
                data-state="volume"
                value=".5" min="0" max="1" step= ".01"
              >
          </div>

          <div class="hios-playback full">
            <i class="hios-control hios-shuffle icon-shuffle" data-state="shuffle"></i>
            <i class="hios-control hios-loop icon-repeat" data-state="repeat"></i>
          </div>

        </div>
        <div id="hios-track-list">
        </div>
      </div>
    `;

  trackHTML =
    `
      <img class="hios-thumbnail" src="/static/images/lemonade.jpg">
      <div class="hios-info">
        <div class="hios-song-title slideInRight">adfd</div>
        <div class="hios-song-artist slideInLeft">dasfasdf</div>
      </div>
    `;

    defineSelectors = () => {
      let container = document.querySelector('#hios-app')

      selectors = {
        appContainer: container,
        miniContainer: container.querySelector('#hios-mini'),
        fullContainer: container.querySelector('#hios-full'),
        playPause: [container.querySelector('.mini > .hios-play-pause'), container.querySelector('.full > .hios-play-pause')],
        next: [container.querySelector('.mini > .hios-next'), container.querySelector('.full > .hios-next')],
        previous: container.querySelector('.full > .hios-previous'),
        shuffle: container.querySelector('.hios-shuffle'),
        loop: container.querySelector('.hios-loop'),
        volume: container.querySelector('#hios-volume-tracking'),
        tracking: container.querySelector('#hios-progress-tracking'),
        trackingTimeProgress: container.querySelector('#hios-progress-completed'),
        trackingTimeDuration: container.querySelector('#hios-progress-duration'),
        minify: container.querySelector('#hios-minify'),
        fullify: container.querySelector('#hios-fullify'),
        trackList: container.querySelector('#hios-track-list'),
        title: [container.querySelector('.mini > .hios-song-title-box > .hios-song-title'), container.querySelector('.full > .hios-song-title')],
        artist: container.querySelector('.full > .hios-song-artist'),
        thumbnail: [container.querySelector('.mini > .hios-thumbnail'), container.querySelector('#hios-full > .hios-artwork-container > .hios-artwork')],
        trackList: container.querySelector('#hios-track-list'),
      };
    }

    addListeners = () => {
      document.addEventListener('click', function (e){
         eventHandler.onClick(e);
      }, false);
    };

   	return {
			buildHTML: () => {
	   		document.querySelector('#hios-app').innerHTML = appHTML;
        defineSelectors();
        addListeners();
      },
      updateView: (currentState) => {
        console.log('state', currentState)
        if (currentState.playerReducer.fullPlayer == true){
          selectors.miniContainer.className = 'hios-inactive'
          selectors.fullContainer.className = 'hios-active'
        } else {
          selectors.miniContainer.className = 'hios-active'
          selectors.fullContainer.className = 'hios-inactive'
        }
      }
   };
}
