// Define and initialize variables
var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li class='partner' id='photos'>";
var closeList = "</li>";
var imageNames = [
  "partner-bustour",
  "partner-cabinrental",
  "partner-campingadv",
  "partner-collegetours",
  "partner-rentalbike",
  "partner-tourgroup",
];
for (var i = 0; i < 6; i++) {
  fileNames.push(imageNames[i]);
  photos.push("<img src='images/partners/" + fileNames[i] + ".png'>");
  image = openList + photos[i] + closeList;
  imageList.push(image);
}
document.getElementById("partners").innerHTML = imageList.join("");

// Define the code and getCode variables for validation
var code = " ";
var getCode = " ";
var btnvalue;
var str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

// Function to disable/enable the submit button
function disableButton(btnvalue) {
  var submitButton = document.getElementById("submit");
  submitButton.disabled = btnvalue;
  if (btnvalue) {
    submitButton.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
    submitButton.style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    submitButton.style.backgroundColor = "rgba(73, 119, 209, 1)";
    submitButton.style.color = "rgba(255, 255, 255, 1)";
  }
}

// Add event listener for input on the code box
var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

// Function to evaluate the code entered by the user
function evaluateCode() {
  getCode = document.getElementById("codeentered").value;
  var charset1 = getCode.trim();
  var charset2 = code.trim();

  if (charset1.length === charset2.length && charset1 === charset2) {
    disableButton(false);
  }
}

// Ensure the button is disabled on page load
document.addEventListener("DOMContentLoaded", function () {
  disableButton(true);
});
