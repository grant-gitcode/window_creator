var tabUrls = [];
var tabIds = [];

chrome.commands.onCommand.addListener(function(command) {
  console.log(command);
  if(command == "asfd") {
    chrome.tabs.query({"active" : true, "currentWindow": true}, function(tabs) {
      tabs.forEach(function(tab) {
        if(tabIds.indexOf(tab.id) == -1) {
          tabUrls.push(tab.url);
          tabIds.push(tab.id);
        }
      });
      console.log(tabIds.length);
      console.log(tabUrls.length);

      chrome.browserAction.setBadgeText({"text":tabUrls.length.toString()});
    });
  }

  if(command == "ffaf") {
    chrome.tabs.remove(tabIds, function() {
      console.log(tabIds);
      chrome.windows.create({"url":tabUrls,"focused":true},function() {
        tabUrls.length = 0; tabIds.length = 0;
        chrome.browserAction.setBadgeText({"text":tabUrls.length.toString()});
      });
    });
  }

});
