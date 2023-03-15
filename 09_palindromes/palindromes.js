const palindromes = function (str) {
	let newStr = str.replace(/[^\w]/gi, "").toLowerCase();
	const reversedStr = newStr.split("").reverse().join("");
	return newStr == reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
