const rentalTiers = {
  1: { base: 4.99, late: 3.99 },
  3: { base: 3.99, late: 2.99 },
  7: { base: 2.99, late: 0.99 }
};

function getRentalCost(rented, returned, tier) {
  const dayInMs = 1000 * 60 * 60 * 24;
  const rentalDate = new Date(rented);
  const returnDate = new Date(returned);
  const pastCheckoutTime = returnDate.getUTCHours() >= 12;

  const timeDiff = returnDate - rentalDate;

  console.log(`Time difference: ${Math.ceil(timeDiff / dayInMs)} days`);

  const daysRented = Math.ceil(timeDiff / dayInMs) + (pastCheckoutTime ? 1 : 0);

  console.log(`Days rented: ${daysRented}`);

  // Calculate the base cost based on the tier
  const { base: baseCost, late: lateFee } = rentalTiers[tier];

  // Calculate the total cost
  const totalCost = baseCost + (Math.max(0, daysRented - tier) * lateFee);

  return `$${totalCost.toFixed(2)}`;
}
