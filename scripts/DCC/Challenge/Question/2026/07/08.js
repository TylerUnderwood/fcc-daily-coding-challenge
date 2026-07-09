/**
 * Given a number of milliseconds since the last post on an issue, and the last message posted on the issue, determine what you should do with the issue according to these rules:
 *
 * - If the last message is less than 7 days ago, return "leave it"
 * - If the last message is 7 or more days ago and its content contains "bump" (case-insensitive), return "close it"
 * - Otherwise, return "bump it"
 */

testsLogger("triageIssue", [
    { guess: triageIssue(86400000, "Lets fix it"), answer: "leave it" },
    { guess: triageIssue(1209600000, "still waiting"), answer: "bump it" },
    { guess: triageIssue(864000000, "bump"), answer: "close it" },
    { guess: triageIssue(604800000, "Do we still want this?"), answer: "bump it" },
    { guess: triageIssue(604800000, "Bumping this"), answer: "close it" },
    { guess: triageIssue(345600000, "I'll make a PR"), answer: "leave it" }
])
