// Money Money Money
// Invest money until reaching the desired amount
// Need starting amount, interest, tax, and desired end amount

function calculateYears(principal, interest, tax, desired) {
	let years = 0;
	let yearlyPrincipal = principal;
	if (principal >= desired) {
		console.log(years);
		return years;
	}
	do {
		let currentPrincipal = yearlyPrincipal;
		let taxedAmount = currentPrincipal * interest * tax;
		let profit = currentPrincipal * interest - taxedAmount;
		let newPrincipal = profit + currentPrincipal;
		yearlyPrincipal = newPrincipal;
		years++;
	} while (yearlyPrincipal < desired);
	return console.log(years);
}

calculateYears(1000, 0.05, 0.18, 1100); // 3 years
calculateYears(1000, 0.01625, 0.18, 1200); // 14 years
calculateYears(1000, 0.05, 0.18, 1000); // 0 years
