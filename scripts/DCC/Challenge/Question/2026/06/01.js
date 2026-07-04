testsLogger(
  "isValidSchema",
  [
    {guess: isValidSchema({ username: "bob" }), answer: true},
    {guess: isValidSchema({ username: "jen", posts: 30 }), answer: true},
    {guess: isValidSchema({ username: "" }), answer: true},
    {guess: isValidSchema({ username: 7 }), answer: false},
    {guess: isValidSchema({ posts: 25 }), answer: false},
  ]
)
