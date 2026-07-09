/**
 * Given a string, return only the words that are entirely lowercase, in their original order and with a space between each word.
 */

testsLogger("getLowercaseWords", [
    { guess: getLowercaseWords("hello GOOD world"), answer: "hello world" },
    { guess: getLowercaseWords("these are all lowercase"), answer: "these are all lowercase" },
    { guess: getLowercaseWords("less is NoT more"), answer: "less is more" },
    { guess: getLowercaseWords("DonT eat pizza every OTHER day"), answer: "eat pizza every day" },
    { guess: getLowercaseWords("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog"), answer: "the quick brown fox jumped over the lazy dog" }
])
