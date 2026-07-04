testsLogger("sortNumbers", [
    { guess: sortNumbers("3,1,2"), answer: [1, 2, 3] },
    { guess: sortNumbers("5,3,8,1,9,2"), answer: [1, 2, 3, 5, 8, 9] },
    { guess: sortNumbers("12,61,49,80,19,50,77,38"), answer: [12, 19, 38, 49, 50, 61, 77, 80] },
    { guess: sortNumbers("0,6,-19,44,-2,7,0"), answer: [-19, -2, 0, 0, 6, 7, 44] }
])

/**
 * Given a string of numbers separated by commas, return an array of the numbers sorted from smallest to largest.
 */
