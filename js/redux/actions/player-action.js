'use strict';
console.log('loading actions')
// action creators simply return an action
const hiosActions = (audioobject) => {
const hiosActions = (audio) => {
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
