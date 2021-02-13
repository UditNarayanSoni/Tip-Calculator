//Calculating Tip Process:-

function calculateTip(){
	var billAmt = document.getElementById("billamt").value;
	var selectTip = document.getElementById("selectTip").value;
	var numberOfpeople = document.getElementById("peopleamt").value;
	
	//validating the input:-
	if(billAmt === "" || billAmt == 0 || selectTip == 0){
		alert("Please Enter the Value...");
		return;
	}
	
	//Check to see if this input is empty or less than or equal to 1:-
	if(numberOfpeople === "" || numberOfpeople <= 1){
		numberOfpeople = 1;
		document.getElementById("each").style.display = "none";
	}
	else{
		document.getElementById("each").style.display = "block";
	}
	
	//Calculate Tip:-
	var total = (billAmt * selectTip) / numberOfpeople;
	
	//Round the decimal values:-
	total = Math.round(total);
	
	//Displaying of Tip:-
	document.getElementById("totaltip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
	
}

//Hide the tip amount on load:-
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";
	
//Click to call "function()":-
document.getElementById("calculate").onclick = function(){
	calculateTip();
}


