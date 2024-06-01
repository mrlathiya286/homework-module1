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
document.getElementById("partners").innerHTML = imageList;
