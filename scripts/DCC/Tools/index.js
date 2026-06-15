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

    let testName = '';

    // Then we need to trim each test case and parse the guess and answer
    const testCaseObjects = testCases.map(testCase => {
        const [guessDirty, answerDirty] = testCase.split(' should return ');

        // Answer will have a trailing period, so we remove it
        const answer = answerDirty.replace(/\.$/, '');

        // Regex to get function name (string before first '(') and parameters (string between the parentheses)
        const funcRegex = /(\w+)\((.*)\)/;
        // Match with find three groups: the full match, the function name, and the parameters
        // eg: ["funcName(\"param1\", \"param2\")", "funcName", "\"param1\", \"param2\""]
        const funcMatch = guessDirty.match(funcRegex);

        // Set our guess to the full function call
        const guess = funcMatch ? funcMatch[0] : '';

        // Now we can use the function name to set the test name
        testName = funcMatch ? funcMatch[1] : '';

        return { guess: guess.trim(), answer: answer.trim() };
    });

    const formattedTestCases = testCaseObjects.map(testCase => {
        return `{ guess: ${testCase.guess}, answer: ${testCase.answer} }`;
    });

    const formattedTest =
`testsLogger("${testName}", [
    ${formattedTestCases.join(',\n    ')}
])`;

    return formattedTest;
};

// Parse the daily question for the user
const initParseTodaysQuestion = () => {
    const questionButton = document.getElementById('parseTodaysQuestion');
    const questionTextarea = document.getElementById('todaysQuestion');

    questionButton.addEventListener('click', () => {
        const question = questionTextarea.value.trim();

        if (question === '') {
            alert('Please enter a question.');
            return;
        } else {
            console.log(`${convertDailyQuestion(question)}`);
        };
    });
};

document.addEventListener('DOMContentLoaded', (event) => {
    initParseTodaysQuestion();
});
