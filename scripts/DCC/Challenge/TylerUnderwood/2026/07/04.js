/**
 *
 * Kaprekar's Routine
 * Given a 4-digit number, return the number of times you need to apply Kaprekar's routine until reaching 6174.
 *
 * Kaprekar's routine works as follows:
 *
 * - Arrange the digits in descending order to form the largest number
 * - Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
 * - Subtract the smaller from the larger
 * - Repeat with the new number
 */


function kaprekar(n) {
  let count = 0;
  const target = 6174;

  while (n !== target) {
    const digits = n.toString().padStart(4, '0').split('').map(Number);
    digits.sort((a, b) => b - a);
    const largest = Number(digits.join(''));
    digits.sort((a, b) => a - b);
    const smallest = Number(digits.join(''));
    n = largest - smallest;
    count++;
  }

  return count;
}
