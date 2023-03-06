const reverseString = function(word) {
let newWord = "";
const wordlen = word.length - 1;
for(let index = wordlen; index >= 0 ; index--){
	newWord += word[index];
	}
	  
return newWord;

};

// Do not edit below this line
module.exports = reverseString;
