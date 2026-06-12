const currentTest = {
  label: "isValidSchema",
  tests: [
    {guess: isValidSchema({ username: "gill", posts: 12, verified: false, role: "creator", supporter: false, badges: [ "early-adopter", "popular" ] }), answer: true},
    {guess: isValidSchema({ username: "tonya", posts: 299, verified: true, role: "moderator", supporter: true, badges: [ "streak-master", "veteran" ], followers: 1233 }), answer: true},
    {guess: isValidSchema({ username: "zara", posts: 0, verified: false, role: "user", supporter: false, badges: [] }), answer: true},
    {guess: isValidSchema({ username: "nicole", posts: 65, verified: true, role: "admin", supporter: false, badges: [ "first-post", 18 ] }), answer: false},
    {guess: isValidSchema({ username: "tim", posts: 25, verified: true, role: "staff", supporter: false }), answer: false},
    {guess: isValidSchema({ username: "charlie", posts: 0, verified: false, role: "user", supporter: "no", badges: [ "first-post", "anniversary" ] }), answer: false},
    {guess: isValidSchema({ username: "wanda", posts: 15, verified: true, role: "friend", supporter: true, badges: [ "popular" ] }), answer: false},
    {guess: isValidSchema({ username: "guy", posts: 5, verified: "false", role: "staff", supporter: true, badges: [ "helper" ] }), answer: false},
    {guess: isValidSchema({ username: "carrie", verified: true, role: "moderator", supporter: true, badges: [ "helper", "sharer" ] }), answer: false},
    {guess: isValidSchema({ username: true, posts: 75, verified: true, role: "creator", supporter: true, badges: [ "veteran" ] }), answer: false},
  ]
}

testsLogger(currentTest.label, currentTest.tests)
