document.addEventListener("DOMContentLoaded", function() {
  function change() {

    var highlight = document.getElementById('new_window').addEventListener("onclick",function() {
      document.write("<p> Hadsf</p>");
    });
  };

  change();
});


/*
chrome.tabs.highlight({"tabs" : [0,1]}, function highlightTabs(window) {


  chrome.tabs.query({"highlighted" : true, "currentWindow" : true}, function getHighlightedTabs(tabs) {

    //Place tabs into an array.
    var tabUrls = [];
    tabs.forEach(function(tab) {
      tabUrls.push(tab.url);
    });


    //pass array to create new window.
    chrome.windows.create({"url" : tabUrls, "focused" : true});



  });
});

*/
