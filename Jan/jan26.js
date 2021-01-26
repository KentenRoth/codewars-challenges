// +1 Array

// Array cannot be empty
// only positive numbers, only single digit numbers allowed
// return null for invalid inputs

function upArray(arr) {
	let killSwitch = false;
	let stringArray = arr.join('');
	let intArray = ++stringArray;

	arr.map((num) => {
		if (num > 9 || num < 0) {
			killSwitch = true;
		}
	});

	if (arr.length === 0) {
		killSwitch = true;
	}

	if (isNaN(intArray) === true) {
		killSwitch = true;
	}
	if (killSwitch === true) {
		return null;
	}

	return intArray;
}

upArray([2, 3, 9]); // [2,4,0]
upArray([4, 3, 2, 5]); // [4,3,2,6]
upArray([1, -9, 12]); // null
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
