function squareNumber(){
	var number = document.getElementById('square-input').value; 

	Square_number = number*number; 
	var squareDiv = document.getElementById('square'); 

	squareDiv.innerHTML = "The result of squareing the number " + number + " is " + Square_number;  
}

var square_button = document.getElementById('square-button'); 

square_button.addEventListener('click',squareNumber); 


function halfNumber(){
	var number = document.getElementById('half-input').value; //if I don't have value my number var does not register as a number.  

	half_number = (number/2);
	console.log(half_number);  

	var halfdiv = document.getElementById('half'); 

	halfdiv.innerHTML = "Half of " + number + " is " + half_number; 
}

var half_button = document.getElementById('half-button'); 

half_button.addEventListener('click',halfNumber);


function percentOf(){
	var firstNumber = document.getElementById('percent1-input').value; 
	var secondNumber = document.getElementById('percent2-input').value;
	console.log(firstNumber);
	console.log(secondNumber); 

	total_percent = ((firstNumber / secondNumber)*100);
	console.log(total_percent); 

	var fractionDiv = document.getElementById('fraction');

	fractionDiv.innerHTML = firstNumber + " is " + total_percent + "% of " + secondNumber;   
}

var percent_button = document.getElementById('percent-button');
percent_button.addEventListener('click',percentOf);




function areaOfCircle(){
	var radius = document.getElementById('area-input').value;
	console.log(radius); 
	area_circle = (Math.PI * radius).toFixed(2); //Math.round() will round up or down to the nearest whole number but toFixed() rounds to what you specify
	//in this case I specified two decimal places after the whole number 
	console.log(area_circle);
	var circleAreaDiv =  document.getElementById('cirlceArea');
	circleAreaDiv.innerHTML = "The area for a circle with radius " + radius + " is " + area_circle; 
}

var area_button = document.getElementById('area-button');
area_button.addEventListener('click',areaOfCircle); 

