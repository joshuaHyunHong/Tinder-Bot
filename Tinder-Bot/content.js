//w3-right w3-btn
// let button = document.querySelector(".w3-right w3-btn");
// if(button) button.click();

window.onload = function () {
    let button = document.querySelector(".w3-right.w3-btn");
    if (button) { 
        button.click();
        console.log("button clicked by content.js");
        window.alert("btn clicked")
     };
};
