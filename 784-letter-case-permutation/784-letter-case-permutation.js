/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
	const isCharNumber = function (c) {
		return c >= '0' && c <= '9';
	};

	const permutate = function (temp, i) {
		if (i === s.length) {
			ans.push(temp);
			return;
		}

		if (isCharNumber(s[i])) {
			temp += s[i];
			permutate(temp, i + 1);
		} else {
			temp += s[i].toLowerCase();
			permutate(temp, i + 1);

			temp = temp.slice(0, -1);

			temp += s[i].toUpperCase();
			permutate(temp, i + 1);
		}
	};

	let ans = [];
	permutate([], 0);

	return ans;
    
};

//Backtracking