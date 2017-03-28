console.log('loading actions');
// action creators simply return an action

window.hios.actions = (audio) => {
	const LAUNCH = 'LAUNCH';
	const LOAD = 'LOAD_PLAYER';
	const PLAY = 'TOGGLE_PLAY';
	const PAUSE = 'TOGGLE_PLAY';
	const NEXT = 'SET_TRACK';
	const PREVIOUS = 'SET_TRACK';
	const JUMP_TO = 'SET_TRACK'
	const SHUFFLE = 'TOGGLE_SHUFFLE';
	const LOOP = 'TOGGLE_LOOP';
	const VOLUME = 'SET_VOLUME';
	const TRACKING = 'SET_TRACKING';
	const KILL = 'LAUNCH';
	const VIEW_MINI = 'SET_SKIN';
	const VIEW_FULL = 'SET_SKIN';
	const state = window.hios.store.getState();
	
  return { 
  	
		play: () => {
		  return {
		    type: PLAY,
		  };
		},

		pause: () => {
		  return {
		    type: PAUSE,
		  };
		},

		next: () => {	 
			if (state.nextQue.length > 0){ // go to next song
	        return  {
	        	type: NEXT,
	          completeQue: state.completeQue.concat(state.currentTrack),
	          nextQue: state.nextQue.slice(1),
	          currentTrack: state.nextQue[0],
	        };
      } else if (state.loopAll == true) { // no more songs, continue looping
        return {
        	type: NEXT,
          completeQue: state.completeQue.concat(state.currentTrack),
          nextQue: resetNextQue(state.shuffle, state.music),
          currentTrack: state.completeQue[0], 
        };
      } else { // no more songs, reset
        return {
        	type: RESET,
        };
      }
		},
		
		previous: () => {
			if (audio.currentTime < 5){
				audio.currentTime = 0
			} else {
				return {
			    type: PREVIOUS,
			    completeQue: state.completeQue.slice(-1),
        	nextQue: [].concat(state.currentTrack, state.nextQue),
        	currentTrack: state.completeQue[-1]
		  	};
			}  
		},

		jump: (track) => {
		  return {
		    type: JUMP_TO,
		    track: track,
		    completeQue: state.completeQue.concat(state.currentTrack),
        	nextQue: resetNextQue(state.shuffle, action.jumptoIndex),
     		tracking: 0,
		  };
		},

		 shuffle: () => {
			 return {
		    type: SHUFFLE
		  };
		},

		loop:  () => {
		  return {
		    type: LOOP
		  }
		},

		updateTracking: (value) => {
			// doesn't involve store
		},

		updateVolume: (value) => {
		  return {
		    type: UPDATE_VOLUME,
		    volume: value
		  };
		},

		swapSkin: () => {
		  return {
		    type: SWAP_SKIN
		  };
		},
		 
	};
};
