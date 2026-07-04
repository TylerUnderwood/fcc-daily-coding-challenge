testsLogger("isValidSchema", [
    { guess: isValidSchema({ username: "henry", posts: 0, verified: true, role: "staff" }), answer: true },
    { guess: isValidSchema({ username: "sara", posts: 45, verified: false, role: "creator", followers: 70 }), answer: true },
    { guess: isValidSchema({ username: "penelope", posts: 20, verified: true, role: "admin" }), answer: true },
    { guess: isValidSchema({ username: "kevin", posts: 0, verified: false, role: "user" }), answer: true },
    { guess: isValidSchema({ username: "george", posts: 15, verified: true, role: "moderator" }), answer: true },
    { guess: isValidSchema({ username: "david", posts: 0, verified: false, role: "guest" }), answer: false },
    { guess: isValidSchema({ username: "wendy", posts: 10, verified: true }), answer: false },
    { guess: isValidSchema({ username: "fabian", posts: 1, verified: true, role: true }), answer: false },
    { guess: isValidSchema({ username: 8, posts: 1, verified: true, role: "user" }), answer: false },
    { guess: isValidSchema({ username: "penny", posts: "10", verified: true, role: "staff" }), answer: false },
    { guess: isValidSchema({ username: "john", posts: "1", verified: "true", role: "admin" }), answer: false }
])
