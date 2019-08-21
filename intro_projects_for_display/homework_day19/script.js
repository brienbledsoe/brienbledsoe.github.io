
var empty = document.getElementById("location");
var catPic = document.getElementById("cat-pic");
var onCatClick = function(e) {
var stashePic = document.getElementById("hat-pic"); 
// if the X and Y coordinates are a bit off, you may have to add or subtrack to make it work
stashePic.style.top = e.clientY - 10 + "px";
stashePic.style.left = e.clientX - 40 + "px";
//change the textContent of the X and Y to be the coordinates of clientX and clientY
empty.textContent = e.clientY + "px" + e.clientX + "px";
};
//when the user clicks, run the onCatClick function
catPic.addEventListener("click", onCatClick);

