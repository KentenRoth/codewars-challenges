// Money Money Money
// Invest money until reaching the desired amount
// Need starting amount, interest, tax, and desired end amount

function calculateYears(principal, interest, tax, desired) {
	let years = 0;
	let yearlyPrincipal = principal;

	while (yearlyPrincipal < desired) {
		let taxedAmount = yearlyPrincipal * interest * tax;
		let newPrincipal = yearlyPrincipal * (interest + 1) - taxedAmount;
		yearlyPrincipal = newPrincipal;
		years++;
	}

	return years;
}

calculateYears(1000, 0.05, 0.18, 1100); // 3 years
calculateYears(1000, 0.01625, 0.18, 1200); // 14 years
calculateYears(1000, 0.05, 0.18, 1000); // 0 years
