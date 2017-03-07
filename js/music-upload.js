(function loadLocalAudio() {
  'use strict';

  console.log(' loading audio');
  let URL = window.URL || window.webkitURL;
  let reader = new FileReader();

  let loadMusic = function(e){
    let defaults = {title: 'Untitled', artist: 'Unknown Artist', album: 'Unknown Album', image:'/static/images/album_cover_Andrew_Fortnum.png' };
    let files = this.files;
    let tracks = [];

    let launchPromise = () => { 
      if (tracks.length > 0){
        APP.launch(tracks)
        console.log('launching with: ', tracks)
      } else {
        console.log('what a problem', tracks, tracks.length);
      } 
    };


    let fn = function asyncTrackGenerator(fileKey){ // sample async action https://stackoverflow.com/questions/31413749/node-js-promise-all-and-foreach
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
      .catch(function(error) {
        console.log(error)
        console.log(Error('Something went wrong cannot launch player'))  
      });
  }

  let inputNode = document.querySelector('input')
  inputNode.addEventListener('change', loadMusic, false)
})()