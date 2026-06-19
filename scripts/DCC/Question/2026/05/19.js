testsLogger("sleepDebt", [
    { guess: sleepDebt([6, 6, 6, 6, 6, 6], 8), answer: 20 },
    { guess: sleepDebt([6, 7, 8, 4, 8, 6], 7), answer: 10 },
    { guess: sleepDebt([10, 10, 9, 10, 9, 11], 9), answer: 4 },
    { guess: sleepDebt([8, 7, 6, 7, 6, 8], 6), answer: 0 },
    { guess: sleepDebt([8, 9, 10, 9, 10, 7], 7), answer: 0 }
])
