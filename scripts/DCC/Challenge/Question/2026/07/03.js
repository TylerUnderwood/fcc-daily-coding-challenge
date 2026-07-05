/**
 * Given two database objects, return the second object with any missing properties from the first filled in.
 *
 * Fields that already exist in the record should not be overwritten.
 */

testsLogger("migrateRecord", [
    { guess: migrateRecord({ username: "", posts: 0 }, { verified: true }), answer: { username: "", posts: 0, verified: true } },
    { guess: migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }), answer: { username: "camper", posts: 5 } },
    { guess: migrateRecord({ username: "", posts: 0, verified: false }, { username: "camper" }), answer: { username: "camper", posts: 0, verified: false } },
    { guess: migrateRecord({ username: "", posts: 0 }, { username: "camper", role: "admin" }), answer: { username: "camper", role: "admin", posts: 0 } },
    { guess: migrateRecord({ username: "", email: "", posts: 0, verified: false, role: "user", banned: false }, { username: "camper", email: "camper@freecodecamp.org", role: "admin" }), answer: { username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false } }
])
