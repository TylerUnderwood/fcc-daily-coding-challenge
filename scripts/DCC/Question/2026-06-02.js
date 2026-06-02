const currentTest = {
  label: "isValidSchema",
  tests: [
    {guess: isValidSchema({ username: "alice", posts: 10, verified: false }), answer: true},
    {guess: isValidSchema({ username: "carol", posts: 15, verified: true, followers: 25 }), answer: true},
    {guess: isValidSchema({ username: "frank", posts: "21", verified: true }), answer: false},
    {guess: isValidSchema({ username: "sam", posts: 17, verified: "false" }), answer: false},
    {guess: isValidSchema({ username: "bill", verified: true }), answer: false},
    {guess: isValidSchema({ username: "fred", verified: true }), answer: false},
    {guess: isValidSchema({ username: 5, posts: 10, verified: true }), answer: false},
  ]
}


testsLogger(currentTest.label, currentTest.tests)
