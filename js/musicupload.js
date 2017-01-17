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
          'image': '/static/images/lemonade.jpg'
        }
      );
    });

    if (music.length == 0){  // if no valid audio files use static
      console.log('using static files')
      music = [
        { 'id': 1,
          'title': '6 Inch',
          'artist': 'Beyonce',
          'source': '/static/audio/6-Inch.mp3',
          'image': '/static/images/lemonade.jpg'
        },
        { 'id': 2,
          'title': 'All Night',
          'artist': 'Beyonce',
          'source': '/static/audio/All-Night.mp3',
          'image': '/static/images/lemonade.jpg'
        },
        { 'id': 3,
          'title': 'Hold Up',
          'artist': 'Beyonce',
          'source': '/static/audio/Hold-Up.mp3',
          'image': '/static/images/lemonade.jpg'
        },
        { 'id': 4,
          'title': 'Blow',
          'artist': 'Beyonce',
          'source': '/static/audio/Blow.mp3',
          'image': '/static/images/beyonce.jpg'
        },
        { 'id': 5,
          'title': 'Drunk In Love',
          'artist': 'Beyonce',
          'source': '/static/audio/Drunk-In-Love.mp3',
          'image': '/static/images/beyonce.jpg'
        },
        { 'id': 6,
          'title': 'Flawless',
          'artist': 'Beyonce',
          'source': '/static/audio/Flawless.mp3',
          'image': '/static/images/beyonce.jpg'
        },
        { 'id': 7,
          'title': 'Formation',
          'artist': 'Beyonce',
          'source': '/static/audio/Formation.mp3',
          'image': '/static/images/lemonade.jpg'
        },
        { 'id': 8,
          'title': 'Freedom',
          'artist': 'Beyonce',
          'source': '/static/audio/Freedom.mp3',
          'image': '/static/images/lemonade.jpg'
        },
        { 'id': 9,
          'title': 'Parition',
          'artist': 'Beyonce',
          'source': '/static/audio/Partition.mp3',
          'image': '/static/images/beyonce.jpg'
        }
      ];
    }
    APP.launch(music)
  };

  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', loadMusic, false)
})()