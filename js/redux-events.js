'use strict';
console.log('loading events')

hiosEvents = () => {

  return { 
  	onClick: (e) => {
	  	if (e.preventDefault) e.preventDefault();

		  let target = e.target || e.srcElement;
		  console.log('click', target.getAttribute('data-state'))

	    switch (target.getAttribute('data-state')) {
		    case 'playpause':
		      store.dispatch({type: 'TOGGLE_PLAY'});
		      store.dispatch({type: 'UPDATE_AUDIO'});
		      break;

		    case 'next':
		      store.dispatch({type:'NEXT', track:})
		       store.dispatch({type: 'UPDATE_AUDIO', tracking: 0 }) 
		      break;

		    case 'previous':
		      store.dispatch({type: 'PREVIOUS', tracking: 0 }) 
		    	store.dispatch({type: 'UPDATE_AUDIO', tracking: 0 }) 
		      break;

		    case 'jump': 
		        store.dispatch({type:'JUMP_TO', track:})
		        store.dispatch({type: 'UPDATE_AUDIO', tracking: 0 }) 
		      break;

		    case 'shuffle':
		      store.dispatch({type:'TOGGLE_SHUFFLE'})
		      break;

		    case 'loop':
		    	store.dispatch({type:'TOGGLE_LOOP'})
		      break;

		    case 'tracking':  
		    	// audio player listeners also at work here
		    	// get new tracking value directly from target 
		      store.dispatch({type: 'UPDATE_AUDIO', tracking: 0 }) 
		      break;

		    case 'volume':
		   	 // get new volume value directly from target
		      store.dispatch({type: 'UPDATE_AUDIO', volume: 0}) 
		      store.dispatch({type: 'VOLUME', volume: 0 }) 
		      break;

		    case 'swap':
		      if (target && target.getAttribute('id') == 'hios-minify'){
		      	store.dispatch({type: 'TOGGLE_PLAYER_TYPE'})
		      }else{
		      	store.dispatch({type: 'TOGGLE_PLAYER_TYPE'})
		      }
		      break;

		    default:
		      console.log('default');
		      break;     
	    }
	  },
  }
}
