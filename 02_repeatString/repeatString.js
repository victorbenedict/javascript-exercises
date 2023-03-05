const repeatString = function(word, numOfRepeat) {
	result = "";
	if (numOfRepeat < 0){return 'ERROR';}
	else{
		for (index = 0; index < numOfRepeat; index ++){
			result += word;
			}
		}
	return result;
};

// Do not edit below this line
module.exports = repeatString;
