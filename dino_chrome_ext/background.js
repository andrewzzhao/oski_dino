
window.addEventListener('offline', (event) => {
  console.log("The network connection has been lost.");
  if (confirm("PLAY OSKI GAME???")) {
    chrome.windows.create({
      // Just use the full URL if you need to open an external page
      url: chrome.runtime.getURL("ALPHA_TEST/index.html"),
      type: "popup"
    });
  } 
});

chrome.browserAction.onClicked.addListener(function(tab){
  chrome.windows.create({
    // Just use the full URL if you need to open an external page
    url: chrome.runtime.getURL("ALPHA_TEST/index.html"),
    type: "popup"
  });
});



chrome.tabs.onUpdated.addListener(function(tab){
  if(navigator.onLine){
    console.log("UPDATED")
  }
});


chrome.tabs.onActivated.addListener(function(){
  if(navigator.onLine){
    console.log("CREATED")
  }
});

function logger(details) {
  console.log("HI")
}

chrome.webRequest.onCompleted.addListener(
  logger,
  {urls: ["<all_urls>"]}
);

console.log(navigator.onLine);