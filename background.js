var tabUrls = [];
var tabIds = [];

/*Sets the badge text on startup of the browser and when a new tab is created.
* This means that a user who installs the extension won't initially see the default
* 0 badge text until the open the first new window since downloading. Not a major issue,
* but could possibly be revised in later updates.
*/
chrome.windows.onCreated.addListener(function() {
  chrome.browserAction.setBadgeText({"text":tabUrls.length.toString()});
});

chrome.commands.onCommand.addListener(function(command) {

  //This command is for when a tab is added; this is the Ctrl+Shift+Z commmand.
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

      chrome.browserAction.setBadgeText({"text":tabUrls.length.toString()});
    });
  }

  //This command is for when a new window is created; this is the Alt+Shift+C command.
  if(command == "ffaf" && tabUrls.length > 0) {
    chrome.tabs.remove(tabIds, function() {
      chrome.windows.create({"url":tabUrls,"focused":true,"state":"maximized"},function() {
        tabUrls = []; tabIds = [];
        chrome.browserAction.setBadgeText({"text":tabUrls.length.toString()});
      });
    });
  }

});
