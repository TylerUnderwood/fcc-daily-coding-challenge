/**
 * Given a string of a person's first and last name, calculate their lucky number using the following rules:
 *
 * - First and last names are separated by a space
 * - Find the vowel and consonant count for each name
 * - Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
 * - Do the same for the two larger counts and the larger name
 * - Subtract the smaller value from the larger one to get their lucky number
 *
 * If the final value is zero (0), return 13.
 */

testsLogger("getLuckyNumber", [
    { guess: getLuckyNumber("John Doe"), answer: 21 },
    { guess: getLuckyNumber("Olivia Lewis"), answer: 52 },
    { guess: getLuckyNumber("James Wilson"), answer: 18 },
    { guess: getLuckyNumber("Elizabeth Hernandez"), answer: 81 },
    { guess: getLuckyNumber("Mike Walker"), answer: 32 },
    { guess: getLuckyNumber("Chloe Perez"), answer: 13 }
])
