// +1 Array

// Array cannot be empty
// only positive numbers, only single digit numbers allowed
// return null for invalid inputs

function upArray(arr) {
	let killSwitch = false;
	let intArray = Number(arr.join(''));
	let addedOne = intArray + 1;
	if (arr.some(isNaN)) {
		console.log('hello');
	}
	if (isNaN(intArray) === true) {
		killSwitch = true;
	}
	if (killSwitch === true) {
		return console.log('null');
	}
	let numString = addedOne.toString().split('');
	return console.log(numString.map(Number));
}

// upArray([2, 3, 9]); // [2,4,0]
// upArray([4, 3, 2, 5]); // [4,3,2,6]
// upArray([1, -9]); // null
upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]); // [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 9]
upArray([
	9,
	2,
	2,
	3,
	3,
	7,
	2,
	0,
	3,
	6,
	8,
	5,
	4,
	7,
	7,
	5,
	8,
	0,
	7,
	5,
	3,
	2,
	6,
	7,
	8,
	4,
	2,
	4,
	2,
	6,
	7,
	8,
	7,
	4,
	5,
	2,
	2,
]);
