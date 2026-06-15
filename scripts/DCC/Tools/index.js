// Convert daily question to Question test function

/**
 * Converts a daily question to a testable question format.
 *
 * eg:
 *
 * 1. isValidCard("4532015112830366") should return true.
 * 2. isValidCard("5425233430109903") should return true.
 *
 *
 * would become:
 *
 * testsLogger("getZoneViolations", [
 *    {guess: isValidCard("4532015112830366"), answer: true},
 *    {guess: isValidCard("5425233430109903"), answer: true}
 * ])
 *
 * OR
 *
 * 1. extractContent('<p>hello world</p>') should return "hello world"
 * 2. extractContent('<a href="example.com">Click me</a>') should return "Click me"
 *
 * would become:
 *
 * testsLogger("extractContent", [
 *    {guess: extractContent('<p>hello world</p>'), answer: "hello world"}
 *    {guess: extractContent('<a href="example.com">Click me</a>'), answer: "Click me"},
 * ])
 */

function convertDailyQuestion(dailyQuestion) {

    // First we need split the daily question into individual test cases
    const testCases = dailyQuestion.split('\n').filter(line => line.trim() !== '');

    // console.log(testCases);

    let testName = ''

    // Then we need to trim each test case and parse the guess and answer
    const testCaseObjects = testCases.map(testCase => {
        const [guessDirty, answerDirty] = testCase.split(' should return ');

        // console.log(guessDirty, answerDirty)

        // Answer will have a trailing period, so we remove it
        const answer = answerDirty.replace(/\.$/, '')

        // guess should remove any parts before the function call
        // Which should leave us with: functionName(arg1, arg2)
        const guessFuncArray = guessDirty.split(' ');
        const guess = guessFuncArray[guessFuncArray.length - 1]

        // Now we can use the function name to set the test name
        testName = guess.split('(')[0]

        return { guess: guess.trim(), answer: answer.trim() };
    });

    const formattedTestCases = testCaseObjects.map(testCase => {
        return `{ guess: ${testCase.guess}, answer: ${testCase.answer} }`;
    })

    const formattedTest = `testsLogger("${testName}", [
        ${formattedTestCases.join(',\n        ')}
    ])`

    return formattedTest
}

const todaysQuestion = `1. isValidCard("4532015112830366") should return true.
Waiting:2. isValidCard("5425233430109903") should return true.
Waiting:3. isValidCard("371449635398431") should return true.
Waiting:4. isValidCard("6011111111111117") should return true.
Waiting:5. isValidCard("4532015112830367") should return false.
Waiting:6. isValidCard("1234567890123456") should return false.
Waiting:7. isValidCard("4532015112830368") should return false.`


// Parse the daily question for the user
const initParseTodaysQuestion = () => {
    const questionButton = document.getElementById('parseTodaysQuestion')
    const questionTextarea = document.getElementById('todaysQuestion')

    questionButton.addEventListener('click', () => {
        const question = questionTextarea.value.trim()

        if (question === '') {
            alert('Please enter a question.')
            return
        } else {
            console.log(`${convertDailyQuestion(question)}`)
        }
    })
}

document.addEventListener('DOMContentLoaded', (event) => {
    initParseTodaysQuestion()
})
