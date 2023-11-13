// background.js
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      if (details.type === "main_frame" && details.method === "GET") {
        console.log('All was well');
        chrome.tabs.get(details.tabId, function(tab) {
          if (chrome.runtime.lastError || !tab) {
            console.error("Error getting tab:", chrome.runtime.lastError);
            return;
          }
  
          console.log('Executing script');
          chrome.tabs.executeScript(tab.id, {
            file: "contentScript.js"
          });
          console.log('Shouldve executed');
        });
      }
      console.log('All was NOT well');
    },
    { urls: ["<all_urls>"], types: ["main_frame"] },
    ["blocking"]
  );
  