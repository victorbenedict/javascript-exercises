const removeFromArray = function(arr, ...args) {

	for(argcount = 0; argcount < args.length; argcount++){
		for (let index = arr.length; index > 0; index--){
			let elementValue = arr[index-1];
			let currentArrayIndex = index -1;
			if(elementValue === args[argcount]){ // Check if the elements is equal to the value of the argument
				arr.splice(currentArrayIndex,1); //splice the element from the array

			}
		}
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
