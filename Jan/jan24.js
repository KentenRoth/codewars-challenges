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
	let rgbCode = [r, g, b];
	let hex = '';

	for (let i = 0; i < rgbCode.length; i++) {
		if (rgbCode[i] / 16 >= 16) {
			hex += 'FF';
		} else if (rgbCode[i] > 0) {
			hex += rgbCode[i].toString(16).toUpperCase();
			// hex += conversion[Math.floor(rgbCode[i] / 16)];
			// hex += conversion[rgbCode[i] % 16];
		} else {
			hex += '00';
		}
	}

	return console.log(hex);
}

rgbToHex(0, 0, 0); //'000000'
rgbToHex(0, 0, -20); //'000000'
rgbToHex(300, 255, 255); //'FFFFFF'
rgbToHex(173, 255, 47); //'ADFF2F'
rgbToHex(247, 255, 271); // F7FFFF
