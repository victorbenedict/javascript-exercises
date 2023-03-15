const fibonacci = function(num) {
	let arr = [0,1,1,2,3];

	if(num < 5 && num >= 0){return arr[num]}
	else if(num < 0){ return 'OOPS'}
	else{
		for(i = 5; i <=num; i++){
			arr.push(arr[arr.length - 2] + arr[arr.length - 1])
		}
		return arr[arr.length - 1]
	}};

// Do not edit below this line
module.exports = fibonacci;
