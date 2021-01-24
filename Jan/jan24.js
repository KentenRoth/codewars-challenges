// RGB to HEX conversion
// Take number and divide by 16
// take remainder of number multiply by 16

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 Decimal
// 0 1 2 3 4 5 6 7 8 9 A B C D  E  F  Hexadecimal

// Index postion will give the hexadecimal
let conversion = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
];

function rgbToHex(r, g, b) {
	// Each argument will have its own hex code
	// need to combine each hex code when finished
	let rHex = '';
	let gHex = '';
	let bHex = '';

	if (r > 0) {
		// code
	} else {
		rHex === 00;
	}
	if (g > 0) {
	} else {
		gHex === 00;
	}

	if (b > 0) {
		// code
	} else {
		bHex === 000;
	}

	console.log(rhex, gHex, bHex);
}

rgbToHex(0, 0, 0); //'000000'
rgbToHex(0, 0, -20); //'000000'
rgbToHex(300, 255, 255); //'FFFFFF'
rgbToHex(173, 255, 47); //'ADFF2F'
