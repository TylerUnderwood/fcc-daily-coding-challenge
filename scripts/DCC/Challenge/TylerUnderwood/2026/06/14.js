/**
 * Given a string of digits for a credit card number, determine if it's a valid card number using the following method:
 *
 * Starting from the second-to-last digit, double every other digit moving left.
 * If doubling a digit results in a number greater than 9, subtract 9.
 * Sum all the digits (doubled and undoubled).
 * If the total is divisible by 10, the number is valid.
 */

function isValidCard(number) {
    // Convert the number to an array of digits
    const digits = number.split('').map(Number);

    // Starting from the second-to-last digit, double every other digit moving left
    for (let i = digits.length - 2; i >= 0; i -= 2) {
        digits[i] *= 2;
        if (digits[i] > 9) {
            digits[i] -= 9;
        }
    }

    // Sum all the digits
    const sum = digits.reduce((acc, digit) => acc + digit, 0);

    // If the total is divisible by 10, the number is valid
    return sum % 10 === 0;
}
