// RGB to HEX conversion
// Take number and divide by 16
// take remainder of number multiply by 16

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 Decimal
// 0 1 2 3 4 5 6 7 8 9  A  B  C  D  E  F  Hexadecimal

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
		let rFirstHex = '';
		let rSecondHex = '';
		let rRemain = '';
		console.log(247 / 16);
		if (r / 16 >= 16) {
			rHex = 'FF';
		} else {
			rFirstHex = conversion[Math.floor(r / 16)];
			rRemain = r % 16;
			rSecondHex = conversion[rRemain];
			rHex = rFirstHex + rSecondHex;
		}
	} else {
		rHex = '00';
	}
	if (g > 0) {
		let gFirstHex = '';
		let gSecondHex = '';
		let gRemain = '';
		if (g / 16 >= 16) {
			gHex = 'FF';
		} else {
			gFirstHex = conversion[Math.floor(g / 16)];
			gRemain = g % 16;
			gSecondHex = conversion[gRemain];
			gHex = gFirstHex + gSecondHex;
		}
	} else {
		gHex = '00';
	}
	if (b > 0) {
		let bFirstHex = '';
		let bSecondHex = '';
		let bRemain = '';
		if (b / 16 >= 16) {
			bHex = 'FF';
		} else {
			bFirstHex = conversion[Math.floor(b / 16)];
			bRemain = b % 16;
			bSecondHex = conversion[bRemain];
			bHex = bFirstHex + bSecondHex;
		}
	} else {
		bHex = '00';
	}

	console.log(rHex + gHex + bHex);
}

// rgbToHex(0, 0, 0); //'000000'
// rgbToHex(0, 0, -20); //'000000'
// rgbToHex(300, 255, 255); //'FFFFFF'
// rgbToHex(173, 255, 47); //'ADFF2F'
rgbToHex(247, 255, 271); // F7FFFF
