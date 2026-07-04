// Function that sums an array of numbers.
function sumOfNums(arr) {
  return arr.reduce((acc, cur) => {
    return +acc + +cur
  })
}

function isValidCard(number) {
  let workingNumber = [...number]
  let isAlternate = false // This variable tracks weather or not to skip a number. Every other number it should be true, the false on the next.

  // Iterate backwards through the array of numbers.
  for (let i = workingNumber.length - 1; i >= 0; i--) {
    // If not on an alternate number (every other number) then skip this step.
    if (!isAlternate) {
      isAlternate = !isAlternate
    // On every other number, multiply by 2. If that number is grteater than 9 subtract 9, flip alternator.
    } else {
      workingNumber[i] *= 2
      if (workingNumber[i] > 9) workingNumber[i] -= 9
      isAlternate = !isAlternate
    }
  }

  // Return true if the sum of all numbers is devisible by 10.
  return sumOfNums(workingNumber) % 10 === 0
}