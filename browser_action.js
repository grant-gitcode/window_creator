//Sets the browser action window size to 20% of the current Window size.
document.addEventListener("DOMContentLoaded", function(event) {
  chrome.windows.getCurrent(function(window) {
    var bod = document.getElementById("bod");
    bod.style.width = (window.width * .2).toString() + "px";
  });


});

/*

var urls = "";
var yes = false;
var text;
var value = "";
var x = document;


document.addEventListener("DOMContentLoaded", function(event) {

  text = document.getElementById("text");
  //text.innerHTML = value;


});

chrome.browserAction.onClicked.addListener(function() {
  document.write("asdf");

});

chrome.storage.sync.get("urls", function(items) {
  console.log(items);
  text.innerHTML = items[0];

});

document.write("hello");



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.storage.sync.set({request : request});
});

function write() {
  document.write("poop");
  yes = false;
}

if(yes) write();

*/
