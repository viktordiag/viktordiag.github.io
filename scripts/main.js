var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world";
/*
 document.querySelector("html").onclick = function () {
    alert("Ouch! Stop pocking me!")
};
*/
var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/photo1.webp") {
        myImage.setAttribute("src", "images/photo2.jpg");
    } else {
        myImage.setAttribute("src", "images/photo1.webp");
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
};

myButton.onclick = function () {
    setUserName();
};
