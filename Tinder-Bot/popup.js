// JS for the pop-up div

document.getElementById("clickButton").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['content.js']
        }).then(() => {
            console.log('Script executed');
        }).catch(err => {
            console.error(err);
        });
    });
});


// make it so that u interact wt popup and click on a btn to find the btn and have the extension auto-click on it? Or just debug content.js ig