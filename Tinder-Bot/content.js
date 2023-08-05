//w3-right w3-btn
// let button = document.querySelector(".w3-right w3-btn");
// if(button) button.click();

//https://www.youtube.com/watch?v=IdQNasXktmM at 3:38
function messageListener(message, sender, sendResponse) {
    console.log("Message received:", message);

    if (message.action === "clickButton") {
        let button = document.querySelector('[class="button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a"]');
        if (button) {
            button.click();
            console.log("button clicked by content.js");
            window.alert("btn clicked");

            // Remove the listener since we've handled the action
            chrome.runtime.onMessage.removeListener(messageListener);
        } else {
            window.alert("NO BTN");
        }
    }
}

chrome.runtime.onMessage.addListener(messageListener);


  
