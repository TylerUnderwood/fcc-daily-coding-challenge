testsLogger("lastLoadDate", [
    { guess: lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2]), answer: 5 },
    { guess: lastLoadDate(16, [2, 3, 0, 3, 4, 2, 1]), answer: 7 },
    { guess: lastLoadDate(33, [5, 0, 4, 3, 3, 2]), answer: 11 },
    { guess: lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2]), answer: 12 },
    { guess: lastLoadDate(20, [13, 9, 12, 10, 8]), answer: 1 }
])
