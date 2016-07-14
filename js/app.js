var APP = {};

APP.player =    new AudioPlayer(music);
APP.view = new Viewz();
console.log(APP.view.container)
APP.view.display('HOME');