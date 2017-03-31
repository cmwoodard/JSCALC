$(document).ready(function(){
	var operation = "";
	var sNum1 = "";
	var sNum2 = "";
	var iNum1 = 0;
	var iNum2 = 0;
	
	
	$('.operation').click(function(){
		if(sNum1 != 0 && sNum2 == 0){
			operation = $(this).attr('id');			
		}
		console.log(operation);
	});
	
	$('.cell').click(function(){
		if(operation == ""){
			sNum1 += $(this).text();
			$('#result').text(sNum1);
		}
		else{			
			sNum2 += $(this).text();
			$('#result').text(sNum2);
		}
	});
	
	//clears when you click the clear button
	$('#clear').click(function(){
		operation = "";
		sNum1 = "";
		sNum2 = "";	
		$('#result').text(" ");		
	});
	//
	$('#equals').click(function(){	
		iNum1 = parseInt(sNum1);
		iNum2 = parseInt(sNum2);
		if(operation == "add"){
			$('#result').text(add(iNum1,iNum2));
		}
		else if(operation == "subtract"){
			$('#result').text(subtract(iNum1,iNum2));
		}
		else if(operation == "multiply"){
			$('#result').text(multiply(iNum1,iNum2));
		}
		
		else if(operation == "divide"){
			$('#result').text(divide(iNum1,iNum2));
		}
		
		
		
		//Clear all numbers after function
		operation = "";
		sNum1 = "";
		sNum2 = "";	
		iNum1 = 0;
		iNum2 = 0;
	});
});

function add(number1, number2){
	return number1+number2;
}
function subtract(number1, number2){
	return number1-number2;
}
function multiply(number1, number2){
	return number1*number2;
}
function divide(number1, number2){
	return number1/number2;
}