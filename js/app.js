var APP = {};

APP.store = Object.create(Store);
APP.store.music = music;

APP.view = Object.create(Viewz);

APP.player = Object.create(AudioPlayer);


console.log(APP.view.container);
