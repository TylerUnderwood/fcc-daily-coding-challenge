testsLogger("getRentalCost", [
    { guess: getRentalCost("2026-06-18T18:30:00Z", "2026-06-19T10:30:00Z", 1), answer: "$4.99" },
    { guess: getRentalCost("2026-06-18T14:30:00Z", "2026-06-20T12:30:00Z", 1), answer: "$12.97" },
    { guess: getRentalCost("2026-06-18T10:15:00Z", "2026-06-18T19:45:00Z", 3), answer: "$3.99" },
    { guess: getRentalCost("2026-06-18T15:20:00Z", "2026-06-23T08:10:00Z", 3), answer: "$9.97" },
    { guess: getRentalCost("2026-06-18T12:00:00Z", "2026-06-25T12:00:00Z", 7), answer: "$2.99" },
    { guess: getRentalCost("2026-06-18T08:00:00Z", "2027-06-18T14:00:00Z", 7), answer: "$358.40" }
])
