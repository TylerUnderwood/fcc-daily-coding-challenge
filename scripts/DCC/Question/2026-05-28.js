testsLogger("fizzBuzzCount", [
    { guess: fizzBuzzCount(1, 11), answer: {fizz: 3, buzz: 2} },
    { guess: fizzBuzzCount(14, 41), answer: {fizz: 9, buzz: 6} },
    { guess: fizzBuzzCount(24, 100), answer: {fizz: 26, buzz: 16} },
    { guess: fizzBuzzCount(-635, -14), answer: {fizz: 207, buzz: 125} },
    { guess: fizzBuzzCount(-5432, 6789), answer: {fizz: 4074, buzz: 2444} }
])
