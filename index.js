console.log('Happy developing ✨');
console.log("cucumber".length);

let myButton = document.getElementById("myButton");
let usrInput = document.getElementById("userInput");
let outMessage = document.getElementById("outMessage");


myButton.addEventListener("click", onButtonClick);
usrInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        onButtonClick();
    }
});

function onButtonClick() {
    let inputText = usrInput.value;
    if (inputText == "") {
        outMessage.innerText = "Please enter something";
    } else {
        outMessage.innerText = "Hello, " + inputText + "!";
    }

}



