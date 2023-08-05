chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.message === "log_to_console") {
      console.log('This is a popup!');
    }
  });
  