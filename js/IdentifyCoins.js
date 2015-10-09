var $ =  function(id)
{
	return document.getElementById(id);
}

window.onload = function()
{
	$("calculate").onclick = calculate_click;	
	
}

var calculate_click = function()
{
	if(isNaN($("cents").value))
	{
		alert("Enter Valid Numeric Value");
		$("cents").value = "";
		return;
	}
	
	var inputCent = parseInt($("cents").value);

	var quarter=0;
	var nickel=0;
	var dime=0;
	var penny=0;
	
	do{
	
	if(inputCent>=25){
		quarter++;
		
	}
	inputCent = inputCent - 25;
	

	}while(inputCent>0)
	
	if(inputCent<0) inputCent = inputCent + 25;
	
	do{
	
	if(inputCent>=10)
		dime++;
		
	inputCent = inputCent - 10;

	}while(inputCent>0)
	
	if(inputCent<0) inputCent = inputCent + 10;
	
	do{
	
	if(inputCent>=5){
		nickel++;
		
	}
	inputCent = inputCent - 5;
	

	}while(inputCent>0)
	
	if(inputCent<0) inputCent = inputCent + 5;
	
	
	do{
	
	if(inputCent>=1){
		penny++;
		
	}
	inputCent = inputCent - 1;
	
	}while(inputCent>0)
	
	if(inputCent<0) inputCent = inputCent + 1;
	
	$("quarters").value = quarter;
	$("dimes").value = dime;
	$("nickels").value = nickel;
	$("pennies").value = penny;
	
	
}

