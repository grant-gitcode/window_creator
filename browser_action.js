//Sets the browser action window size to 20% of the current Window size.
document.addEventListener("DOMContentLoaded", function(event) {
  chrome.windows.getCurrent(function(window) {
    var bod = document.getElementById("bod");
    bod.style.width = (window.width * .2).toString() + "px";
  });


});
