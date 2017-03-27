!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Redux=e():t.Redux=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var o=n(2),u=r(o),i=n(7),c=r(i),a=n(6),f=r(a),s=n(5),d=r(s),l=n(1),p=r(l),y=n(3);r(y);e.createStore=u["default"],e.combineReducers=c["default"],e.bindActionCreators=f["default"],e.applyMiddleware=d["default"],e.compose=p["default"]},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],o=e.slice(0,-1);return function(){return o.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){function r(){b===h&&(b=h.slice())}function u(){return v}function c(t){if("function"!=typeof t)throw Error("Expected listener to be a function.");var e=!0;return r(),b.push(t),function(){if(e){e=!1,r();var n=b.indexOf(t);b.splice(n,1)}}}function s(t){if(!(0,i["default"])(t))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw Error("Reducers may not dispatch actions.");try{m=!0,v=y(v,t)}finally{m=!1}for(var e=h=b,n=0;e.length>n;n++)e[n]();return t}function d(t){if("function"!=typeof t)throw Error("Expected the nextReducer to be a function.");y=t,s({type:f.INIT})}function l(){var t,e=c;return t={subscribe:function(t){function n(){t.next&&t.next(u())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[a["default"]]=function(){return this},t}var p;if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw Error("Expected the reducer to be a function.");var y=t,v=e,h=[],b=h,m=!1;return s({type:f.INIT}),p={dispatch:s,subscribe:c,getState:u,replaceReducer:d},p[a["default"]]=l,p}e.__esModule=!0,e.ActionTypes=void 0,e["default"]=o;var u=n(4),i=r(u),c=n(12),a=r(c),f=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},function(t,e,n){function r(t){if(!i(t)||p.call(t)!=c||u(t))return!1;var e=o(t);if(null===e)return!0;var n=d.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==l}var o=n(8),u=n(9),i=n(11),c="[object Object]",a=Function.prototype,f=Object.prototype,s=a.toString,d=f.hasOwnProperty,l=s.call(Object),p=f.toString;t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var i=t(n,r,o),a=i.dispatch,f=[],s={getState:i.getState,dispatch:function(t){return a(t)}};return f=e.map(function(t){return t(s)}),a=c["default"].apply(void 0,f)(i.dispatch),u({},i,{dispatch:a})}}}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e["default"]=o;var i=n(1),c=r(i)},function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},u=0;r.length>u;u++){var i=r[u],c=t[i];"function"==typeof c&&(o[i]=n(c,e))}return o}e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function u(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:c.ActionTypes.INIT});if(void 0===r)throw Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if(void 0===n(void 0,{type:o}))throw Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+c.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function i(t){for(var e=Object.keys(t),n={},r=0;e.length>r;r++){var i=e[r];"function"==typeof t[i]&&(n[i]=t[i])}var c,a=Object.keys(n);try{u(n)}catch(f){c=f}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];if(c)throw c;for(var r=!1,u={},i=0;a.length>i;i++){var f=a[i],s=n[f],d=t[f],l=s(d,e);if(void 0===l){var p=o(f,e);throw Error(p)}u[f]=l,r=r||l!==d}return r?u:t}}e.__esModule=!0,e["default"]=i;var c=n(2),a=n(4),f=(r(a),n(3));r(f)},function(t,e,n){var r=n(10),o=r(Object.getPrototypeOf,Object);t.exports=o},function(t,e){function n(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n},function(t,e,n){t.exports=n(13)},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),u=r(o),i=void 0;void 0!==t?i=t:"undefined"!=typeof window&&(i=window);var c=(0,u["default"])(i);e["default"]=c}).call(e,function(){return this}())},function(t,e){"use strict";function n(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n}])});
(function(){var e=function(t){this.type=t||e.OPEN_URI;this.size=null;this.file=null};e.OPEN_FILE=1;e.OPEN_URI=2;e.OPEN_LOCAL=3;if(typeof require==="function"){var t=require("fs")}e.prototype.open=function(i,r){this.file=i;var n=this;switch(this.type){case e.OPEN_LOCAL:t.stat(this.file,function(e,i){if(e){return r(e)}n.size=i.size;t.open(n.file,"r",function(e,t){if(e){return r(e)}n.fd=t;r()})});break;case e.OPEN_FILE:this.size=this.file.size;r();break;default:this.ajax({uri:this.file,type:"HEAD"},function(e,t,i){if(e){return r(e)}n.size=parseInt(i.getResponseHeader("Content-Length"));r()});break}};e.prototype.close=function(){if(this.type===e.OPEN_LOCAL){t.close(this.fd)}};e.prototype.read=function(t,i,r){if(typeof i==="function"){r=i;i=0}if(this.type===e.OPEN_LOCAL){this.readLocal(t,i,r)}else if(this.type===e.OPEN_FILE){this.readFile(t,i,r)}else{this.readUri(t,i,r)}};e.prototype.readBlob=function(e,t,i,r){if(typeof t==="function"){r=t;t=0}else if(typeof i==="function"){r=i;i="application/octet-stream"}this.read(e,t,function(e,t){if(e){r(e);return}r(null,new Blob([t],{type:i}))})};e.prototype.readLocal=function(e,i,r){var n=new Buffer(e);t.read(this.fd,n,0,e,i,function(e,t,i){if(e){return r(e)}var n=new ArrayBuffer(i.length),a=new Uint8Array(n);for(var l=0;l<i.length;l++){a[l]=i[l]}r(null,n)})};e.prototype.ajax=function(e,t){var i={type:"GET",uri:null,responseType:"text"};if(typeof e==="string"){e={uri:e}}for(var r in e){i[r]=e[r]}var n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState!==4)return;if(n.status!==200&&n.status!==206){return t("Received non-200/206 response ("+n.status+")")}t(null,n.response,n)};n.responseType=i.responseType;n.open(i.type,i.uri,true);if(i.range){i.range=[].concat(i.range);if(i.range.length===2){n.setRequestHeader("Range","bytes="+i.range[0]+"-"+i.range[1])}else{n.setRequestHeader("Range","bytes="+i.range[0])}}n.send()};e.prototype.readUri=function(e,t,i){this.ajax({uri:this.file,type:"GET",responseType:"arraybuffer",range:[t,t+e-1]},function(e,t){if(e){return i(e)}return i(null,t)})};e.prototype.readFile=function(e,t,i){var r=this.file.slice(t,t+e),n=new FileReader;n.onload=function(e){i(null,e.target.result)};n.onerror=function(e){i("File read failed")};n.readAsArrayBuffer(r)};DataView.prototype.getString=function(e,t,i){t=t||0;e=e||this.byteLength-t;if(e<0){e+=this.byteLength}var r="";if(typeof Buffer!=="undefined"){var n=[];for(var a=t;a<t+e;a++){n.push(this.getUint8(a))}return new Buffer(n).toString()}else{for(var a=t;a<t+e;a++){r+=String.fromCharCode(this.getUint8(a))}if(i){return r}return decodeURIComponent(escape(r))}};DataView.prototype.getStringUtf16=function(e,t,i){t=t||0;e=e||this.byteLength-t;var r=false,n="",a=false;if(typeof Buffer!=="undefined"){n=[];a=true}if(e<0){e+=this.byteLength}if(i){var l=this.getUint16(t);if(l===65534){r=true}t+=2;e-=2}for(var o=t;o<t+e;o+=2){var s=this.getUint16(o,r);if(s>=0&&s<=55295||s>=57344&&s<=65535){if(a){n.push(s)}else{n+=String.fromCharCode(s)}}else if(s>=65536&&s<=1114111){s-=65536;if(a){n.push(((1047552&s)>>10)+55296);n.push((1023&s)+56320)}else{n+=String.fromCharCode(((1047552&s)>>10)+55296)+String.fromCharCode((1023&s)+56320)}}}if(a){return new Buffer(n).toString()}else{return decodeURIComponent(escape(n))}};DataView.prototype.getSynch=function(e){var t=0,i=2130706432;while(i){t>>=1;t|=e&i;i>>=8}return t};DataView.prototype.getUint8Synch=function(e){return this.getSynch(this.getUint8(e))};DataView.prototype.getUint32Synch=function(e){return this.getSynch(this.getUint32(e))};DataView.prototype.getUint24=function(e,t){if(t){return this.getUint8(e)+(this.getUint8(e+1)<<8)+(this.getUint8(e+2)<<16)}return this.getUint8(e+2)+(this.getUint8(e+1)<<8)+(this.getUint8(e)<<16)};var i=function(t,r){var n={type:i.OPEN_URI};if(typeof t==="string"){t={file:t,type:i.OPEN_URI}}else if(typeof window!=="undefined"&&window.File&&t instanceof window.File){t={file:t,type:i.OPEN_FILE}}for(var a in t){n[a]=t[a]}if(!n.file){return r("No file was set")}if(n.type===i.OPEN_FILE){if(typeof window==="undefined"||!window.File||!window.FileReader||typeof ArrayBuffer==="undefined"){return r("Browser does not have support for the File API and/or ArrayBuffers")}}else if(n.type===i.OPEN_LOCAL){if(typeof require!=="function"){return r("Local paths may not be read within a browser")}}else{}var l=["Blues","Classic Rock","Country","Dance","Disco","Funk","Grunge","Hip-Hop","Jazz","Metal","New Age","Oldies","Other","Pop","R&B","Rap","Reggae","Rock","Techno","Industrial","Alternative","Ska","Death Metal","Pranks","Soundtrack","Euro-Techno","Ambient","Trip-Hop","Vocal","Jazz+Funk","Fusion","Trance","Classical","Instrumental","Acid","House","Game","Sound Clip","Gospel","Noise","AlternRock","Bass","Soul","Punk","Space","Meditative","Instrumental Pop","Instrumental Rock","Ethnic","Gothic","Darkwave","Techno-Industrial","Electronic","Pop-Folk","Eurodance","Dream","Southern Rock","Comedy","Cult","Gangsta Rap","Top 40","Christian Rap","Pop / Funk","Jungle","Native American","Cabaret","New Wave","Psychedelic","Rave","Showtunes","Trailer","Lo-Fi","Tribal","Acid Punk","Acid Jazz","Polka","Retro","Musical","Rock & Roll","Hard Rock","Folk","Folk-Rock","National Folk","Swing","Fast  Fusion","Bebob","Latin","Revival","Celtic","Bluegrass","Avantgarde","Gothic Rock","Progressive Rock","Psychedelic Rock","Symphonic Rock","Slow Rock","Big Band","Chorus","Easy Listening","Acoustic","Humour","Speech","Chanson","Opera","Chamber Music","Sonata","Symphony","Booty Bass","Primus","Porn Groove","Satire","Slow Jam","Club","Tango","Samba","Folklore","Ballad","Power Ballad","Rhythmic Soul","Freestyle","Duet","Punk Rock","Drum Solo","A Cappella","Euro-House","Dance Hall","Goa","Drum & Bass","Club-House","Hardcore","Terror","Indie","BritPop","Negerpunk","Polsk Punk","Beat","Christian Gangsta Rap","Heavy Metal","Black Metal","Crossover","Contemporary Christian","Christian Rock","Merengue","Salsa","Thrash Metal","Anime","JPop","Synthpop","Rock/Pop"];var o={};o.types={TALB:"album",TBPM:"bpm",TCOM:"composer",TCON:"genre",TCOP:"copyright",TDEN:"encoding-time",TDLY:"playlist-delay",TDOR:"original-release-time",TDRC:"recording-time",TDRL:"release-time",TDTG:"tagging-time",TENC:"encoder",TEXT:"writer",TFLT:"file-type",TIPL:"involved-people",TIT1:"content-group",TIT2:"title",TIT3:"subtitle",TKEY:"initial-key",TLAN:"language",TLEN:"length",TMCL:"credits",TMED:"media-type",TMOO:"mood",TOAL:"original-album",TOFN:"original-filename",TOLY:"original-writer",TOPE:"original-artist",TOWN:"owner",TPE1:"artist",TPE2:"band",TPE3:"conductor",TPE4:"remixer",TPOS:"set-part",TPRO:"produced-notice",TPUB:"publisher",TRCK:"track",TRSN:"radio-name",TRSO:"radio-owner",TSOA:"album-sort",TSOP:"performer-sort",TSOT:"title-sort",TSRC:"isrc",TSSE:"encoder-settings",TSST:"set-subtitle",TAL:"album",TBP:"bpm",TCM:"composer",TCO:"genre",TCR:"copyright",TDY:"playlist-delay",TEN:"encoder",TFT:"file-type",TKE:"initial-key",TLA:"language",TLE:"length",TMT:"media-type",TOA:"original-artist",TOF:"original-filename",TOL:"original-writer",TOT:"original-album",TP1:"artist",TP2:"band",TP3:"conductor",TP4:"remixer",TPA:"set-part",TPB:"publisher",TRC:"isrc",TRK:"track",TSS:"encoder-settings",TT1:"content-group",TT2:"title",TT3:"subtitle",TXT:"writer",WCOM:"url-commercial",WCOP:"url-legal",WOAF:"url-file",WOAR:"url-artist",WOAS:"url-source",WORS:"url-radio",WPAY:"url-payment",WPUB:"url-publisher",WAF:"url-file",WAR:"url-artist",WAS:"url-source",WCM:"url-commercial",WCP:"url-copyright",WPB:"url-publisher",COMM:"comments",APIC:"image",PIC:"image"};o.imageTypes=["other","file-icon","icon","cover-front","cover-back","leaflet","media","artist-lead","artist","conductor","band","composer","writer","location","during-recording","during-performance","screen","fish","illustration","logo-band","logo-publisher"];o.parse=function(e,t,i){i=i||0;t=t||4;var r={tag:null,value:null},n=new DataView(e);if(t<3){return o.parseLegacy(e)}var a={id:n.getString(4),type:n.getString(1),size:n.getUint32Synch(4),flags:[n.getUint8(8),n.getUint8(9)]};if(a.flags[1]!==0){return false}if(!a.id in o.types){return false}r.tag=o.types[a.id];if(a.type==="T"){var s=n.getUint8(10);if(s===0||s===3){r.value=n.getString(-11,11)}else if(s===1){r.value=n.getStringUtf16(-11,11,true)}else if(s===2){r.value=n.getStringUtf16(-11,11)}else{return false}if(a.id==="TCON"&&!!parseInt(r.value)){r.value=l[parseInt(r.value)]}}else if(a.type==="W"){r.value=n.getString(-10,10)}else if(a.id==="COMM"){var s=n.getUint8(10),u=14,f=0;for(var g=u;;g++){if(s===1||s===2){if(n.getUint16(g)===0){u=g+2;break}g++}else{if(n.getUint8(g)===0){u=g+1;break}}}if(s===0||s===3){r.value=n.getString(-1*u,u)}else if(s===1){r.value=n.getStringUtf16(-1*u,u,true)}else if(s===2){r.value=n.getStringUtf16(-1*u,u)}else{return false}}else if(a.id==="APIC"){var s=n.getUint8(10),c={type:null,mime:null,description:null,data:null};var u=11,f=0;for(var g=u;;g++){if(n.getUint8(g)===0){f=g-u;break}}c.mime=n.getString(f,u);c.type=o.imageTypes[n.getUint8(u+f+1)]||"other";u+=f+2;f=0;for(var g=u;;g++){if(n.getUint8(g)===0){f=g-u;break}}c.description=f===0?null:n.getString(f,u);c.data=e.slice(u+1);r.value=c}return r.tag?r:false};o.parseLegacy=function(e){var t={tag:null,value:null},i=new DataView(e),r={id:i.getString(3),type:i.getString(1),size:i.getUint24(3)};if(!r.id in o.types){return false}t.tag=o.types[r.id];if(r.type==="T"){var n=i.getUint8(7);t.value=i.getString(-7,7);if(r.id==="TCO"&&!!parseInt(t.value)){t.value=l[parseInt(t.value)]}}else if(r.type==="W"){t.value=i.getString(-7,7)}else if(r.id==="COM"){var n=i.getUint8(6);t.value=i.getString(-10,10);if(t.value.indexOf("\x00")!==-1){t.value=t.value.substr(t.value.indexOf("\x00")+1)}}else if(r.id==="PIC"){var n=i.getUint8(6),a={type:null,mime:"image/"+i.getString(3,7).toLowerCase(),description:null,data:null};a.type=o.imageTypes[i.getUint8(11)]||"other";var s=11,u=0;for(var f=s;;f++){if(i.getUint8(f)===0){u=f-s;break}}a.description=u===0?null:i.getString(u,s);a.data=e.slice(s+1);t.value=a}return t.tag?t:false};var s={};s.parse=function(e,t){var i={title:null,album:null,artist:null,year:null,v1:{title:null,artist:null,album:null,year:null,comment:null,track:null,version:1},v2:{version:[null,null]}},r={v1:false,v2:false},n=function(e){if(r.v1&&r.v2){i.title=i.v2.title||i.v1.title;i.album=i.v2.album||i.v1.album;i.artist=i.v2.artist||i.v1.artist;i.year=i.v1.year;t(e,i)}};e.read(128,e.size-128,function(e,t){if(e){return n("Could not read file")}var a=new DataView(t);if(t.byteLength!==128||a.getString(3,null,true)!=="TAG"){r.v1=true;return n()}i.v1.title=a.getString(30,3).replace(/(^\s+|\s+$)/,"")||null;i.v1.artist=a.getString(30,33).replace(/(^\s+|\s+$)/,"")||null;i.v1.album=a.getString(30,63).replace(/(^\s+|\s+$)/,"")||null;i.v1.year=a.getString(4,93).replace(/(^\s+|\s+$)/,"")||null;if(a.getUint8(125)===0){i.v1.comment=a.getString(28,97).replace(/(^\s+|\s+$)/,"");i.v1.version=1.1;i.v1.track=a.getUint8(126)}else{i.v1.comment=a.getString(30,97).replace(/(^\s+|\s+$)/,"")}i.v1.genre=l[a.getUint8(127)]||null;r.v1=true;n()});e.read(14,0,function(t,a){if(t){return n("Could not read file")}var l=new DataView(a),s=10,u=0,f;if(a.byteLength!==14||l.getString(3,null,true)!=="ID3"||l.getUint8(3)>4){r.v2=true;return n()}i.v2.version=[l.getUint8(3),l.getUint8(4)];f=l.getUint8(5);if((f&128)!==0){r.v2=true;return n()}if((f&64)!==0){s+=l.getUint32Synch(11)}u+=l.getUint32Synch(6);e.read(u,s,function(e,t){if(e){r.v2=true;return n()}var a=new DataView(t),l=0;while(l<t.byteLength){var s,u,f,g=true;for(var c=0;c<3;c++){f=a.getUint8(l+c);if((f<65||f>90)&&(f<48||f>57)){g=false}}if(!g)break;if(i.v2.version[0]<3){u=t.slice(l,l+6+a.getUint24(l+3))}else{u=t.slice(l,l+10+a.getUint32Synch(l+4))}s=o.parse(u,i.v2.version[0]);if(s){i.v2[s.tag]=s.value}l+=u.byteLength}r.v2=true;n()})})};var u=new e(n.type);u.open(n.file,function(e){if(e){return r("Could not open specified file")}s.parse(u,function(e,t){r(e,t);u.close()})})};i.OPEN_FILE=e.OPEN_FILE;i.OPEN_URI=e.OPEN_URI;i.OPEN_LOCAL=e.OPEN_LOCAL;if(typeof module!=="undefined"&&module.exports){module.exports=i}else{if(typeof define==="function"&&define.amd){define("id3",[],function(){return i})}else{window.id3=i}}})();
resetNextQue = (shuffling, music) => {

}

shuffleCurrentTrack = (shuffling, music) => {
}

/**
 * Randomize array element order in-place.  Using Durstenfeld shuffle algorithm.
 */
hiosShuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

import { createStore } from 'redux';
import playerReducer from './reducers';

const hiosApp = combineReducers({
  playerReducer,
});

let store = createStore(hiosApp)
// import { createStore, combineReducers } from 'redux';
// import playerReducer from '/reducers';
// import { audioReducer as audio } from 'redux-audio';

// const hiosApp = combineReducers({
//   playerReducer,
// });

// let store = createStore(hiosApp);
console.log('ready for redux')

const playerReducer = (state = {}, action) => {
  console.log('received action: ', action.type, ' previous state: ', state)

  switch (action.type){
  	case 'LOAD':
      return Object.assign( {}, state, {
        music: action.uploadedMusic,
        fullPlayer: false,
        completeQue: [],
        nextQue: action.uploadedMusic.slice(1),
        currentTrack: action.uploadedMusic[0],
        volume: .5,
        playing: false,
        shuffle: false,
        loopCurrent: false,
        loopAll: false
      });

    case 'KILL':
      return Object.assign( {}, state, {
        music: action.uploadedMusic,
        fullPlayer: false,
        completeQue: [],
        nextQue: {},
        currentTrack:{},
        volume: .5,
        playing: false,
        shuffle: false,
        loopCurrent: false,
        loopAll: false
      });

    case 'RESET':
      return Object.assign( {}, state, {
        completeQue: [],
          nextQue: action.music.slice(1),
          currentTrack: action.music[0],
          volume: .5,
          playing: false,
          shuffle: false,
          loopCurrent: false,
          loopAll: false,f
      });

  	case 'TOGGLE_PLAY':
      return Object.assign( {}, state, {
        playing: !state.playing,
      });

    case 'NEXT':
      if (state.nextQue.length > 0){ // go to next song
        return Object.assign( {}, state, {
          completeQue: state.completeQue.concat(state.currentTrack),
          nextQue: state.nextQue.slice(1),
          currentTrack: state.nextQue[0],
        });
      } else if (state.loopAll == true) { // set player to continue looping
        return Object.assign( {}, state, {
          completeQue: state.completeQue.concat(state.currentTrack),
          nextQue: resetNextQue(state.shuffle, state.music),
          currentTrack: state.completeQue[0], 
        });
      } else { //  reset player to start over NEED TO ALSO REFRESH DOM CUZ NO SONGS WILL BE HIGHLIGHTED
        return Object.assign( {}, state, {
          completeQue: [],
          nextQue: action.music.slice(1),
          currentTrack: action.music[0],
          volume: .5,
          playing: false,
          shuffle: false,
          loopCurrent: false,
          loopAll: false,
        });

      }   

    case 'JUMP_TO':
      return Object.assign( {}, state, {
        completeQue: state.completeQue.concat(state.currentTrack),
        nextQue: resetNextQue(state.shuffle, action.jumptoIndex),
        currentTrack: state.music[action.jumpToIndex],
        tracking: 0,
      });

    case 'PREVIOUS':
      return Object.assign( {}, state, {
        completeQue: state.completeQue.slice(-1),
        nextQue: [].concat(state.currentTrack, state.nextQue),
        currentTrack: state.completeQue[-1]
      });
    

    case 'VOLUME':
      return Object.assign( {}, state, {
        volume: (action.volume || state.volume)
      });

    case 'TOGGLE_SHUFFLE':
      return Object.assign( {}, state, {
        shuffle: !state.shuffle, 
        nextQue: shuffleNextQue(state.shuffle, state.music),
      });

    case 'TOGGLE_LOOP':
      return Object.assign( {}, state, {
        loopAll: !state.loopAll
      });

    case 'TOGGLE_PLAYER_TYPE':
      return Object.assign( {}, state, {
        fullPlayer: !state.fullPlayer
      });

   
    default:
      return state;
  }
};

'use strict';
console.log('loading view')

const hiosView = (eventHandler) => {
  let selectors = {};
	let appHTML =
    `
      <div id="hios-mini" draggable="true" class="hios-active animated slideInUp">
        <div class="hios-wrap mini">
          <img class="hios-thumbnail" src="/static/images/album_cover_Andrew_Fortnum.png">
          <div class="hios-song-title-box">
             <div class="hios-song-title"></div>
          </div>
          <div class="hios-audio mini">
              <i class="hios-play-pause icon-play" onclick="APP.hiosBind.playPause()" ></i>
              <i class="hios-next icon-skip-forward" data-state="next"></i>
          </div>
        </div>
      </div>

      <div id="hios-full" class="hios-inactive">
        <i id="hios-minify" class="icon-shrink" data-state="swap"></i>
        <div class="hios-artwork-container">
          <img class="hios-artwork" src="/static/images/album_cover_Andrew_Fortnum.png">
        </div>
        <div class="hios-controls full">
          <div class ="hios-progress">
            <input
              id= "hios-progress-tracking"
              class="hios-tracking"
              type="range"
              data-state="tracking"
              value= "0" min="0" max="100"
            >
            <div id="tracking-output">
              <output
                for="tracking"
                id="hios-progress-completed">
                1.00
              </output>
              <output
                for="tracking"
                id="hios-progress-duration">
                10.00
              </output>
            </div>
          </div>

          <div class ="hios-info full">
            <div class="hios-song-title"></div>
            <div class="hios-song-artist"></div>
          </div>

          <div class="hios-audio full">
            <i class="hios-control hios-previous icon-skip-back" data-state="previous" ></i>
            <i class="hios-control hios-play-pause icon-play" onclick="APP.hiosBind.playPause()" ></i>
            <i class="hios-control hios-next icon-skip-forward" data-state="next"></i>
          </div>

          <div class="hios-volume" full>
            <input
                id="hios-volume-tracking"
                class="hios-tracking"
                type="range"
                data-state="volume"
                value=".5" min="0" max="1" step= ".01"
              >
          </div>

          <div class="hios-playback full">
            <i class="hios-control hios-shuffle icon-shuffle" data-state="shuffle"></i>
            <i class="hios-control hios-loop icon-repeat" data-state="repeat"></i>
          </div>

        </div>
        <div id="hios-track-list">
        </div>
      </div>
    `;

  let trackHTML =
    `
      <img class="hios-thumbnail" src="/static/images/lemonade.jpg">
      <div class="hios-info">
        <div class="hios-song-title slideInRight">adfd</div>
        <div class="hios-song-artist slideInLeft">dasfasdf</div>
      </div>
    `;

    const defineSelectors = () => {
      let container = document.querySelector('#hios-app')

      selectors = {
        appContainer: container,
        miniContainer: container.querySelector('#hios-mini'),
        fullContainer: container.querySelector('#hios-full'),
        playPause: [container.querySelector('.mini > .hios-play-pause'), container.querySelector('.full > .hios-play-pause')],
        next: [container.querySelector('.mini > .hios-next'), container.querySelector('.full > .hios-next')],
        previous: container.querySelector('.full > .hios-previous'),
        shuffle: container.querySelector('.hios-shuffle'),
        loop: container.querySelector('.hios-loop'),
        volume: container.querySelector('#hios-volume-tracking'),
        tracking: container.querySelector('#hios-progress-tracking'),
        trackingTimeProgress: container.querySelector('#hios-progress-completed'),
        trackingTimeDuration: container.querySelector('#hios-progress-duration'),
        minify: container.querySelector('#hios-minify'),
        fullify: container.querySelector('#hios-fullify'),
        trackList: container.querySelector('#hios-track-list'),
        title: [container.querySelector('.mini > .hios-song-title-box > .hios-song-title'), container.querySelector('.full > .hios-song-title')],
        artist: container.querySelector('.full > .hios-song-artist'),
        thumbnail: [container.querySelector('.mini > .hios-thumbnail'), container.querySelector('#hios-full > .hios-artwork-container > .hios-artwork')],
        trackList: container.querySelector('#hios-track-list'),
      };
    }

    // const addListeners = () => {
    //   document.addEventListener('click', function (e){
    //      eventHandler.onClick(e);
    //   }, false);
    // };

   	return {
			buildHTML: () => {
	   		document.querySelector('#hios-app').innerHTML = appHTML;
        defineSelectors();
        // addListeners();
      },
      updateView: (currentState) => {
        console.log('state', currentState)
        if (currentState.playerReducer.fullPlayer == true){
          selectors.miniContainer.className = 'hios-inactive'
          selectors.fullContainer.className = 'hios-active'
        } else {
          selectors.miniContainer.className = 'hios-active'
          selectors.fullContainer.className = 'hios-inactive'
        }
      }
   };
}

'use strict';

const hiosAudio = () => {
  var audio = {}; // HTML5 audio object

  return {
    init: function (src){
      audio = new Audio(src);
    },
    update: function (options) {
      audio.currentTime = (options.time || audio.currentTime);
      audio.src= (options.source || audio.src);
      audio.volume = (options.volume || audio.volume);
    },
    play: function (bool) {
      bool ? audio.play() : audio.pause();
    },
    returnAudio: function () {
      return audio;
    },
    justStarted: function () {
      return audio.currentTime < 5 ? true : false;
    }
  };
};

'use strict';
console.log('loading actions')
// action creators simply return an action
const hiosActions = (audioobject) => {
	const PLAY = 'TOGGLE_PLAY';
	const NEXT = 'NEXT';
	const PREVIOUS = 'PREVIOUS';
	const JUMP = 'JUMP_TO';
	const SHUFFLE = 'TOGGLE_SHUFFLE';
	const LOOP = 'TOGGLE_LOOP';
	const UPDATE_VOLUME = 'VOLUME';
	const SWAP_SKIN = 'TOGGLE_PLAYER_TYPE';
	
  return { 
  	
		playPause: () => {
		  return {
		    type: PLAY,
		  };
		},

		nextTrack: () => {
		  return {
		    type: NEXT;
		  };
		},
		
		previousTrack: () => {
			if (audio.currentTime < 5){
				audio.currentTime = 0
			} else {
				return {
			    type: PREVIOUS,
		  	};
			}  
		},

		jumpToTrack: (track) => {
		  return {
		    type: JUMP,
		    track: track
		  };
		},

		 shuffle: () => {
			 return {
		    type: SHUFFLE
		  };
		},

		loop:  () => {
		  return {
		    type: LOOP
		  }
		},

		updateTracking: (value) => {
			// doesn't involve store
		},

		updateVolume: (value) => {
		  return {
		    type: UPDATE_VOLUME,
		    volume: value
		  };
		},

		swapSkin: () => {
		  return {
		    type: SWAP_SKIN
		  };
		},
		 
	};

};