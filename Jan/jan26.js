// +1 Array

// Array cannot be empty
// only positive numbers, only single digit numbers allowed
// return null for invalid inputs

function upArray(arr) {
	let killSwitch = false;
	arr.map((num) => {
		if (num < 0 || isNaN(num) === false) {
			return (killSwitch = true);
		}
	});
	if (killSwitch === true) {
		return null;
	}
}

upArray([2, 3, 9]); // [2,4,0]
upArray([4, 3, 2, 5]); // [4,3,2,6]
upArray([1, -9]); // null
