testsLogger("isValidCard", [
    { guess: isValidCard("4532015112830366"), answer: true },
    { guess: isValidCard("5425233430109903"), answer: true },
    { guess: isValidCard("371449635398431"), answer: true },
    { guess: isValidCard("6011111111111117"), answer: true },
    { guess: isValidCard("4532015112830367"), answer: false },
    { guess: isValidCard("1234567890123456"), answer: false },
    { guess: isValidCard("4532015112830368"), answer: false }
])
