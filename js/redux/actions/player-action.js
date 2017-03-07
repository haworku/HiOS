'use strict';
console.log('loading actions')
// action creators simply return an action
const hiosActions = (audioobject) => {
	const PLAY = 'TOGGLE_PLAY';
	const NEXT = 'NEXT';
	const PREVIOUS = 'PREVIOUS';
	const JUMP = 'JUMP_TO';
	const SHUFFLE = 'TOGGLE_SHUFFLE';
	const LOOP = 'TOGGLE_LOOP';
	const UPDATE_VOLUME = 'VOLUME';
	const SWAP_SKIN = 'TOGGLE_PLAYER_TYPE';
	
  return { 
  	
		playPause: () => {
		  return {
		    type: PLAY,
		  };
		},

		nextTrack: () => {
		  return {
		    type: NEXT;
		  };
		},
		
		previousTrack: () => {
			if (audio.currentTime < 5){
				audio.currentTime = 0
			} else {
				return {
			    type: PREVIOUS,
		  	};
			}  
		},

		jumpToTrack: (track) => {
		  return {
		    type: JUMP,
		    track: track
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
