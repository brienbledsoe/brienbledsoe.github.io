function wholePage(){
	var total_elements = document.getElementsByTagName('p').length; 
	console.log(total_elements); 
	alert("There are " + total_elements + " paragraph tags on this page.")
}

var total_button = document.getElementById("total-button"); 
total_button.addEventListener("click",wholePage); 

function firstDiv(){
var element = document.getElementById("first-div");
var numberOfChildren = element.getElementsByTagName('p').length; 
console.log(numberOfChildren);
alert("There are " + numberOfChildren + " paragraph tags in this div.")
}

var first_block = document.getElementById("first-block");
first_block.addEventListener("click",firstDiv); 

function secondDiv(){
var element = document.getElementById("second-div");
var numberOfChildren = element.getElementsByTagName('p').length; 
console.log(numberOfChildren); 
alert("There are " + numberOfChildren + " paragraph tags in this div.")
}

var second_block = document.getElementById("second-block"); 
second_block.addEventListener("click",secondDiv); 