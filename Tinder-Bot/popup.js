// JS for the pop-up div

document.getElementById("clickButton").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['content.js']
        }).then(() => {
            console.log('Script executed');
            // Send a message to the content script to perform the action
            chrome.tabs.sendMessage(tabs[0].id, { action: "clickButton" });
        }).catch(err => {
            console.error("popup err: ", err);
        });
    });
});





// make it so that u interact wt popup and click on a btn to find the btn and have the extension auto-click on it? Or just debug content.js ig
