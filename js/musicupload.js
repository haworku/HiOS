(function loadLocalAudio() {
// refactor to use DataView and ID3 tags
// https://ericbidelman.tumblr.com/post/8343485440/reading-mp3-id3-tags-in-javascript
// have a default fallback image, title, artist

  'use strict';

  var URL = window.URL || window.webkitURL;

  var loadMusic = function (e){
    let music = [];

    var files = this.files;

    Object.keys(files).forEach( function (key){
      music.push(
        { 'id': Number(key) + 1,
          'title': files[key].name.substr(0, files[key].name.lastIndexOf('.')) || files[key].name,
          'artist': 'Beyonce',
          'source': URL.createObjectURL(files[key]),
          'image': '/static/images/album_cover_Andrew_Fortnum.png'
        }
      );
    });

    if (music.length == 0){  // if no valid audio files use static
      console.log('upload failed')
    }
    APP.launch(music)
  };

  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', loadMusic, false)
})()