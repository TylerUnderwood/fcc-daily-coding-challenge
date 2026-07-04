testsLogger("isValidSchema", [
    { guess: isValidSchema({ username: "vivian", posts: 1, verified: false, role: "user", supporter: true }), answer: true },
    { guess: isValidSchema({ username: "rudolph", posts: 15, verified: true, role: "creator" }), answer: true },
    { guess: isValidSchema({ username: "hernandez", posts: 35, verified: true, role: "moderator", supporter: false, followers: 55 }), answer: true },
    { guess: isValidSchema({ username: "julia", posts: 50, verified: true, role: "admin", supporter: "true" }), answer: false },
    { guess: isValidSchema({ username: "bernard", posts: 0, verified: true, role: "friend", supporter: true }), answer: false },
    { guess: isValidSchema({ username: "felix", posts: 40, verified: "yes", role: "staff", supporter: false }), answer: false },
    { guess: isValidSchema({ username: "jimmy", posts: true, verified: false, role: "creator", supporter: true }), answer: false },
    { guess: isValidSchema({ username: true, posts: 30, verified: true, role: "moderator", supporter: false }), answer: false }
])
