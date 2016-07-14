## HiOS Music Player
**HANA's music player, styled off iOs**

**Directory** 

```
HiOs 
│  
│   README.md
│   index.html
│   package.json
│   gulpfile.js
│   app.js
│   .gitignore
│
└─── dist (compiled css and js)
│
└── style (less stylesheets)   
│
└── static 
│      │
│      └──images
│            │
│            │   favicon.png   
│            └───controls (icons from IonIcons library)       
└── js 
  │
  └── music.js contains sample music object   
  │
  └── player.js contains 'AudioPlayer' utility functions   
  │
  └── view.js contains the 'View' DOM manipulations   
  │
  └── app.js launches new app   
  │
  └── events.js contains event listening and updates 'APP.state'   
```

**Scripts**
- `$ gulp js` build js files 
- `$ gulp less` run less compiler on all less files
- `$ gulp dev' start development server at 127.0.0.1:8000 (also complies js and less files)

