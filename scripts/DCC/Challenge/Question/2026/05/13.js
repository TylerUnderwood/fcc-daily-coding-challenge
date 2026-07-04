testsLogger("findOffender", [
    { guess: findOffender([1, 6, 2, 3, 4, 5]), answer: 1 },
    { guess: findOffender([1, 2, 3, 5, 4, 5]), answer: 3 },
    { guess: findOffender([2, 1]), answer: 0 },
    { guess: findOffender([2, 4, 1, 6, 8]), answer: 2 },
    { guess: findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91]), answer: 6 }
])
