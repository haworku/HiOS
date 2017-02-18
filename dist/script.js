observeStore = (store, onChange) => {
  let currentState;
  handleChange = () => {
    let nextState = store.getState();
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}

combineReducers = (reducers) => { 
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => { // nextState is function holding reducer, key is the reducer function
        nextState[key] = reducers[key]( // goes into each reducer function
          state[key], 
          action
        );
      return nextState;
      },
      {}
    );
  };
}; 

resetNextQue = (shuffling, music) => {

}

shuffleCurrentTrack = (shuffling, music) => {
}

/**
 * Randomize array element order in-place.  Using Durstenfeld shuffle algorithm.
 */
hiosShuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const createStore = (combinedReducer) => {
  console.log('creating store')
  let state;
  let listeners = [] //  keep track of the change listeners

  const getState = () => state; // current state

  const dispatch = (action)  => {
    console.log('listeners', listeners)
    state = combinedReducer(state, action);
    listeners.forEach( listener => listener() ); // notify each listener after there's a new state from reducer
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter( l => l !== listener )// to remove listener subscribe again
    }
  }

  dispatch({}) // initial state rendered when store created

  return { getState, dispatch, subscribe};
};

const playerReducer = (state = {}, action) => {
  console.log('received action: ', action.type, ' previous state: ', state)

  switch (action.type){
  	case 'LOAD_PLAYER':
      return Object.assign( {}, state, {
        music: action.uploadedMusic,
        fullPlayer: false,
        completeQue: [],
        nextQue: action.uploadedMusic.slice(1),
        currentTrack: action.uploadedMusic[0],
        volume: .5,
        playing: false,
        shuffle: false,
        loopCurrent: false,
        loopAll: false
      });

  	case 'TOGGLE_PLAY':
      return Object.assign( {}, state, {
        playing: !state.playing,
      });

    case 'NEXT':
      if (state.nextQue.length > 0){ // go to next song
        return Object.assign( {}, state, {
          completeQue: state.completeQue.concat(state.currentTrack),
          nextQue: state.nextQue.slice(1),
          currentTrack: state.nextQue[0],
        });
      } else if (state.loopAll == true) { // set player to continue looping
        return Object.assign( {}, state, {
          completeQue: state.completeQue.concat(state.currentTrack),
          nextQue: resetNextQue(state.shuffle, state.music),
          currentTrack: state.completeQue[0], 
        });
      } else { //  reset player to start over NEED TO ALSO REFRESH DOM CUZ NO SONGS WILL BE HIGHLIGHTED
        return Object.assign( {}, state, {
          completeQue: [],
          nextQue: action.music.slice(1),
          currentTrack: action.music[0],
          volume: .5,
          playing: false,
          shuffle: false,
          loopCurrent: false,
          loopAll: false,
        });

      }   

    case 'JUMP_TO':
      return Object.assign( {}, state, {
        completeQue: state.completeQue.concat(state.currentTrack),
        nextQue: resetNextQue(state.shuffle, state.nexQue.slice(1)),
        currentTrack: state.music[action.jumpToIndex],
      });

    case 'PREVIOUS':
      if (state.audioObject.currentTime < 5){
        return Object.assign( {}, state.audioObject, { currentTime: 0});
      } else {
        return Object.assign( {}, state, {
          completeQue: state.completeQue.slice(-1),
          nextQue: [].concat(state.currentTrack, state.nextQue),
          currentTrack: state.completeQue[-1]
        });
      }


    case 'UPDATE_AUDIO':
      return Object.assign( {}, state, {
        audioObject: Object.assign( {}, state.audioObject, {
          // currentTime: (action.tracking || state.audioObject.currentTime), ACK
          src: state.currentTrack.source,
          // volume: (action.volume || state.audioObject.volume) ACK
        })     
      });

    case 'VOLUME':
      return Object.assign( {}, state, {
        volume: action.volume
        }); 


    case 'TOGGLE_SHUFFLE':
      return Object.assign( {}, state, {
        shuffle: !state.shuffle, 
        nextQue: shuffleNextQue(state.shuffle, state.music),
      });

    case 'TOGGLE_LOOP':
      return Object.assign( {}, state, {
        loopAll: !state.loopAll
      });

    case 'TOGGLE_PLAYER_TYPE':
      return Object.assign( {}, state, {
        fullPlayer: !state.fullPlayer
      });

   
    default:
      return state;
  }
};

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

'use strict';

hiosAudio = () => {
  var audio = {}; // HTML5 audio object

  return {
    init: function (src){
      audio = new Audio(src);
    },
    update: function (options) {
      audio.currentTime = (options.time || audio.currentTime);
      audio.src= (options.source || audio.src);
      audio.volume = (options.volume || audio.volume);
    },
    play: function (bool) {
      bool ? audio.play() : audio.pause();
    },
    returnAudio: function () {
      return audio;
    },
    justStarted: function () {
      return audio.currentTime < 5 ? true : false;
    }
  };
};

'use strict';
console.log('loading events')

hiosEvents = (store) => {

  return { 
  	onClick: (e) => {
  		let target = e.target || e.srcElement;
  		let type = '';

	  	if (e.preventDefault) e.preventDefault();

		  if( !e.target.getAttribute('data-state') ){
	      type = 'swap'
	    }else{
	      type = target.getAttribute('data-state');
	    }
	
	    switch (type) {
		    case 'playpause':
		      store.dispatch({type: 'TOGGLE_PLAY'});
		      store.dispatch({type: 'UPDATE_AUDIO'});
		      break;

		    case 'next':
		      store.dispatch({type:'NEXT'})
		      store.dispatch({type: 'UPDATE_AUDIO', tracking: 0 }) 
		      break;

		    case 'previous':
		      store.dispatch({type: 'PREVIOUS', tracking: 0 }) 
		      store.dispatch({type: 'UPDATE_AUDIO', tracking: 0 }) 
		      break;

		    case 'jump': 
		        store.dispatch({type:'JUMP_TO', track: ''})
		        store.dispatch({type: 'UPDATE_AUDIO', tracking: 0 }) 
		      break;

		    case 'shuffle':
		      store.dispatch({type:'TOGGLE_SHUFFLE'})
		      break;

		    case 'loop':
		    	store.dispatch({type:'TOGGLE_LOOP'})
		      break;

		    case 'tracking':  
		    	// get new tracking value directly from target 
		      store.dispatch({type: 'UPDATE_AUDIO', tracking: 0 }) 
		      break;

		    case 'volume':
		   	 // get new volume value directly from target
		      store.dispatch({type: 'UPDATE_AUDIO', volume: 0}) 
		      store.dispatch({type: 'VOLUME', volume: 0 }) 
		      break;

		    case 'swap':
		      store.dispatch({type: 'TOGGLE_PLAYER_TYPE'})
		      break;

		    default:
		      console.log('default');
		      break;     
	    }
	  },
  }
}

'use strict';
var APP = {};

APP.launch = function (music) { // this method is called from musicupload.js
  const combinedReducer = combineReducers({
    playerReducer
  }); 

  APP.store = createStore(combinedReducer);
  APP.events = hiosEvents(APP.store);
  APP.audio = hiosAudio();
  APP.view = hiosView(APP.events, APP.audio);
  APP.view.buildHTML(); 
  observeStore(APP.store, APP.view.updateView);
  APP.store.dispatch({type: 'LOAD_PLAYER', uploadedMusic: music});   
};

(function loadLocalAudio() {
  'use strict';

  let URL = window.URL || window.webkitURL;
  let reader = new FileReader();

  let loadMusic = function(e){
    let defaults = {title: 'Untitled', artist: 'Unknown Artist', album: 'Unknown Album', image:'/static/images/album_cover_Andrew_Fortnum.png' };
    let files = this.files;
    let tracks = [];

    let launchPromise = new Promise(function(resolve, reject){ 
      console.log('ran launch', tracks)
      (tracks.length > 0) ? resolve() : reject();
    });


    let fn = function asyncTrackGenerator(fileKey){ // sample async action
      let tags = {};

      id3( files[fileKey], function(err, id3Tags) {
        tags =  {
          title: id3Tags.title || defaults.title, 
          artist: id3Tags.artist || defaults.artist,
          image: '' || defaults.image,
          album: id3Tags.album || defaults.album
        }
      }) // ./ id3  

        return new Promise(resolve => setTimeout(() => {
          tracks.push(
            { 'id': Number(fileKey) + 1,
              'title': tags.title,
              'artist': tags.artist,
              'album': tags.album,
              'source': URL.createObjectURL(files[fileKey]),
              'image': tags.image
            }
          );  

          resolve(tracks)
         }, 100)); // ./ track promise resolve
    };

    let fileActions = Object.keys(files).map(fn); // returns all track promises

    let generatorComplete = Promise.all(fileActions); // wait for all promises to resolve

    generatorComplete
      .then(launchPromise)
      .then(APP.launch(tracks))
      .catch(function(error) {
        console.log(Error('Something went wrong cannot launch player'))  
      });
  }

  let inputNode = document.querySelector('input')
  inputNode.addEventListener('change', loadMusic, false)
})()