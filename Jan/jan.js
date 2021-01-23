// Exes and Ohs
// check to see if a string has the same amount of x's and o's
// must return boolean
// must be case insensitive
// if no x and o should return true

function XO(str) {
	let x = 0;
	let o = 0;
	let string = str.toLowerCase();
	for (let i = 0; i < string.length; i++) {
		if (string[i] === 'x') {
			x = x + 1;
		} else if (string[i] === 'o') {
			o = o + 1;
		}
	}

	if (x === o) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
}

XO('xo'); // true
XO('xooxx'); // false
XO('ooxXm'); // true
XO('zpzpzpp'); // true
XO('zzoo'); // false
