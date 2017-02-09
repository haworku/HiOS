(function loadLocalAudio() {
  'use strict';

  let URL = window.URL || window.webkitURL;
  let reader = new FileReader();

  let loadMusic = function(e){
    let defaults = {title: 'Untitled', artist: 'Unknown Artist', album: 'Unknown Album', image:'/static/images/album_cover_Andrew_Fortnum.png' };
    let files = this.files;
      
    let promise = new Promise(function(resolve, reject){
    var music = ['fix me'];

      Object.keys(files).forEach( (key) => {
        id3( files[key], function(err, id3Tags) {
          let tags =  {
            title: id3Tags.title || defaults.title, 
            artist: id3Tags.artist || defaults.artist,
            image: '' || defaults.image,
            album: id3Tags.album || defaults.album
          }
          music.push(
            { 'id': Number(key) + 1,
              'title': tags.title,
              'artist': tags.artist,
              'album': tags.album,
              'source': URL.createObjectURL(files[key]),
              'image': tags.image
            }
          );
        }) // ./ id3   
      }) // ./ forEach
      console.log('fix me', music, music.length)
    
      (music.length > 0) ? resolve(music) : reject();

    }); // ./ promise declaration

      promise
      .then(function(music) { 
        APP.launch(music) 
      })
      .catch(function(error) {
        console.log(Error('Something went wrong cannot launch player'))  
      });
  }

  let inputNode = document.querySelector('input')
  inputNode.addEventListener('change', loadMusic, false)
})()