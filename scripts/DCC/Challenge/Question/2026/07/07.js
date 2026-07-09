/**
 * Given two integers, round the first to the nearest multiple of the second.
 */

testsLogger("roundToNearestMultiple", [
    { guess: roundToNearestMultiple(5, 3), answer: 6 },
    { guess: roundToNearestMultiple(17, 4), answer: 16 },
    { guess: roundToNearestMultiple(43, 5), answer: 45 },
    { guess: roundToNearestMultiple(38, 11), answer: 33 },
    { guess: roundToNearestMultiple(93, 12), answer: 96 }
])
