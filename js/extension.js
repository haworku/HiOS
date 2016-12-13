'use strict';
function handleRequest(
  //The object data with the request params
  request,
  //These last two ones isn't important for this example, if you want know more about it visit: http://code.google.com/chrome/extensions/messaging.html
  sender, sendResponse
  ) {
  if (request.callFunction == 'hios')
    hios();
}
chrome.extension.onRequest.addListener(handleRequest);

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Hello you clicked")
  chrome.tabs.sendRequest(
        //Selected tab id
        tab.id,
        //Params inside a object data
        {callFunction: 'hios'},
        //Optional callback function
        function(response) {
          console.log(response);
        }
      );
});

function hios(){
  var hios = document.createElement('div');
  hios.id = 'hios-app';
  hios.setAttribute('data-state', 'swap');
  hios.innerHTML =
     ` <div id="hios-file-upload" class="animated slideInUp">
      Upload Music Files To Test Player
      <div id="message"></div>
      <input type="file" multiple accept="audio/*"/>
    </div> `
  document.body.appendChild(hios);
}