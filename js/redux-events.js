'use strict';
console.log('loading events')

hiosEvents = (store) => {
	let selectors = {};

	let onClick =  (e) => {
	  	if (e.preventDefault) e.preventDefault();

		  let target = e.target || e.srcElement;
		  console.log('click', target.getAttribute('data-state'))

	    switch (target.getAttribute('data-state')) {
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

		    case 'loop':
		    	store.dispatch({type:'TOGGLE_LOOP'})
		      break;

		    case 'tracking':  
		     // audio player listeners also at work here
		    	// get property directly from target ??? not need for reference to HTML
		      store.dispatch({type: 'UPDATE_AUDIO', tracking: 0 }) 
		      break;

		    case 'volume':
		    // get property directly from target ??? no need for reference to HTML
		      store.dispatch({type: 'UPDATE_AUDIO', volume: 0}) 
		      store.dispatch({type: 'VOLUME', volume: 0 }) 
		      break;

		    case 'swap':
		      if (target && target.getAttribute('id') == 'hios-minify'){
		      	// dispatch event
		      }else{
		      	// dispatch event
		      }
		      break;

		    default:
		      console.log('default');
		      break;     
	    }
	  }

  return { 

	  // addListeners: () => {
  	// 	console.log('add Events')
  	// 	selectors.appContainer.addEventListener('click', function (e){
		 //    if( !e.target.getAttribute('data-state') ){
		 //      onClick('swap');
		 //    }else{
		 //      onClick(e);
		 //    }
		 //  }, false);
  
  }
}
