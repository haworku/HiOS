'use strict';
console.log('loading events')

const hiosEvents = (selectors, store) => {
  var appHTML, trackHTML, selectors ={}

  onClick ({e}){
  	if (e.preventDefault) e.preventDefault();

	  // event element  - will be undefined if parameter is not event object
	  var target = e.target || e.srcElement;
	  // if event, get data-state, else directly assign parameter to string variable
	  var string = target ? target.getAttribute('data-state') : e;

    switch (target.getAttribute('data-action')) {
	    case 'playpause':
	      store.dispatch({type: 'TOGGLE_PLAY'});
	      store.dispatch({type: 'UPDATE_AUDIO'});
	      break;

	    case 'next':
	      // if triggered by click on track list, jump to that track
	      // if (target && target.getAttribute('class') == 'hios-track') {
	      //   var index = APP.view.getTrackIndex(target);
	      //   var oldIndex = APP.state.currentTrack.id - 1;
	      //   APP.state.completeQue.unshift(APP.state.currentTrack);
	      //   APP.state.currentTrack =  APP.state.music[index];
	      //   APP.state.nextQue = APP.state.nextQue.splice(oldIndex + (index - oldIndex), APP.state.nextQue.length -1);
	      //   APP.player.update({time: 0, source: APP.state.currentTrack.source});
	      //   APP.view.updateTrackList({track: APP.state.currentTrack});
	      // } else if (APP.state.nextQue.length > 0) { 
	      // // if more songs left
	      //   APP.state.completeQue.unshift(APP.state.currentTrack);
	      //   APP.state.currentTrack =  APP.state.nextQue.shift();
	      //   APP.player.update({time: 0, source: APP.state.currentTrack.source});
	      //   APP.view.updateTrackList({track: APP.state.currentTrack});
	      // } else if (APP.state.loopAll) {
	      //  //if no more songs left but looping playlist
	      //   APP.reset();
	      //   APP.view.updateTrackList({music: APP.state.nextQue, track: APP.state.currentTrack});
	      //   APP.player.update({source:APP.state.currentTrack.source, volume: .5, currentTime: 0});
	      // } else {
	      //     console.log('no more songs');
	      // }

	      break;

	    case 'previous':
	      // if (APP.state.completeQue.length === 0 || APP.player.justStarted() === false ){
	      //   APP.player.update(APP.state.playing, {time: 0}); // replay current song
	      // } else {
	      //   APP.state.nextQue.unshift(APP.state.currentTrack);   // go back one song
	      //   APP.state.currentTrack =  APP.state.completeQue.shift();
	      //   APP.view.updateTrackList({track: APP.state.currentTrack});
	      //   APP.player.update({time: 0, source: APP.state.currentTrack.source});
	      // }

	      break;

	    case 'shuffle':
	      store.dispatch({type:'TOGGLE_SHUFFLE'})
	      if (store.getState().shuffle) {
	       // store.dispatch shuffle store.music 
	      }
	      break;

	    case 'loop'
	    	store.dispatch({type:'TOGGLE_LOOP'})
	      break;

	    case 'tracking':  // audio player listneners also at work here
	      store.dispatch({type: 'UPDATE_AUDIO', tracking: view.getSelectorProperty('tracking, value') }) 
	      break;

	    case 'volume':
	      store.dispatch({type: 'UPDATE_AUDIO', volume: view.getSelectorProperty('volume, value') }) 
	      store.dispatch({type: 'VOLUME', volume: view.getSelectorProperty('volume, value') }) 
	      break;

	    case 'swap':
	      if (target && target.getAttribute('id') == 'hios-minify'){
	        APP.view.swapSkin('mini');
	      }else{
	        APP.view.swapSkin('full');
	      }
	      break;

	    default:
	      console.log('default');
	      break;     
    }
  }
}
