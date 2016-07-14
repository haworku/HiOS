## HiOS Music Player
** HANA's music player, styled off iOs **

**Directory**
_ dist (compiled .css and .js)
_ style (.less stylesheets)
_ static (app icons and folder for track images and audio)
_ js (main library)
   |________ music.js contains sample music object
   |________ player.js contains AudioPlayer utility functions
   |________view.js contains DOM manipulations
   |________ app.js launches new app
   |________ events.js contains event listening


*** Scripts ***
- `$ gulp js` build js files 
- `$ gulp less` run less compiler on all less files
-'`$ gulp dev' start development server at 127.0.0.1:8000 (also complies js and less files)


icons used are from IonIcons
