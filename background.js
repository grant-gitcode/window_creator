var tabUrls = [];
var tabIds = [];

chrome.commands.onCommand.addListener(function(command) {
  console.log(command);
  if(command == "asfd") {
    chrome.tabs.query({"active" : true, "currentWindow": true}, function(tabs) {
      tabs.forEach(function(tab) {
        var index = tabIds.indexOf(tab.id);
        if(index == -1) {
          tabUrls.push(tab.url);
          tabIds.push(tab.id);
        } else {
          tabUrls.splice(index,1);
          tabIds.splice(index,1);
        }
      });
      console.log(tabIds.length);
      console.log(tabUrls.length);

      chrome.browserAction.setBadgeText({"text":tabUrls.length.toString()});
    });
  }

  if(command == "ffaf" && tabUrls.length > 0) {
    chrome.tabs.remove(tabIds, function() {
      console.log(tabIds);
      chrome.windows.create({"url":tabUrls,"focused":true},function() {
        tabUrls.length = 0; tabIds.length = 0;
        chrome.browserAction.setBadgeText({"text":tabUrls.length.toString()});
      });
    });
  }

});
