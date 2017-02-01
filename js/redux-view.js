'use strict';
console.log('loading view')

 hiosView = (store) => {
	appHTML =
    `
      <div id="hios-mini" draggable="true" class="hios-active animated slideInUp">
        <div class="hios-wrap mini">
          <img class="hios-thumbnail" src="/static/images/lemonade.jpg">
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
          <img class="hios-artwork" src="/static/images/lemonade.jpg">
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

   	return {
			buildHTML: function () {
	   		document.querySelector('#hios-app').innerHTML = appHTML;
	   	},
   };
}

// need to be listening for events from audioReducer play/pause etc. 
// need to reset tracking once metadata loaded
// update tracklist and populate current track