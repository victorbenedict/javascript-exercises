const sumAll = function(number_A,number_B) {

	let total = 0;
	

	if(	number_A < 0 || 
		number_B < 0 || 
		typeof(number_A) != "number" ||
		typeof(number_B) != "number"	
		){return 'ERROR'} //ERROR checking for negative numbers or non-number parameters.

	//first integer with the lower value as start and last integer with the higher value is the end of the calculation > 
	if(number_A > number_B){ 
		for(count = number_B; count <= number_A; count++){ //Loop will be created to calculate the sum in between the first and last number.
			total += count;
		}
	}
	else{
		for(count = number_A; count <= number_B; count++){
			total += count;
		}
	}
	return total;
};

// Do not edit below this line
module.exports = sumAll;
