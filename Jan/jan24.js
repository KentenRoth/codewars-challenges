// RGB to HEX conversion
// Take number and divide by 16
// take remainder of number multiply by 16

function rgbToHex(r, g, b) {
	let rgbCode = [r, g, b];
	let hex = '';

	for (let i = 0; i < rgbCode.length; i++) {
		if (rgbCode[i] / 16 >= 16) {
			hex += 'FF';
		} else if (rgbCode[i] > 0) {
			hex +=
				rgbCode[i].toString(16).length == 1
					? '0' + rgbCode[i].toString(16).toUpperCase()
					: rgbCode[i].toString(16).toUpperCase();
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
