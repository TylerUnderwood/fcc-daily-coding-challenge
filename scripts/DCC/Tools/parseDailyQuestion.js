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

        // Regex to get function name (string before first '('), and parameters (string between the parentheses)
        const funcRegex = /(\w+)\((.*)\)/;
        // Match will find three groups: the full match, the function name, and the parameters
        // eg: [`funcName("param1", "param2")`, `funcName`, `"param1", "param2"`]
        const funcMatch = guessDirty.match(funcRegex);

        // Set our guess to the full function call
        const guess = funcMatch ? funcMatch[0] : '';

        // Use the function name to set the test name
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

    // TODO: Update Error Handling to catch any errors that might occur during the formatting process
    // Return promise that resolves to the formatted test
    return new Promise((resolve, reject) => {
        resolve(formattedTest);
        reject(new Error('Failed to format test'));
    });
};

// Parse the daily question for the user
const initParseDailyQuestion = () => {
    const parseDailyQuestionSection = document.getElementById('section-parseDailyQuestion');
    if (parseDailyQuestionSection) {
        parseDailyQuestionSection.style.removeProperty('display');
    } else {
        console.error('Parse Daily Question section not found');
        return;
    }

    const questionForm = document.getElementById('parseDailyQuestionForm');
    const questionButton = document.getElementById('parseDailyQuestion');
    const questionTextarea = document.getElementById('dailyQuestion');
    const questionMessage = document.getElementById('parseDailyQuestionMessage');

    const handleParseDailyQuestion = () => {
        const question = questionTextarea.value.trim();
        const questionPromise = convertDailyQuestion(question);

        questionPromise.then((formattedQuestion) => {
            // Log
            console.log(`${formattedQuestion}`);
            // Add to clipboard
            navigator.clipboard.writeText(formattedQuestion);
            questionMessage.textContent = 'Question parsed and copied to clipboard.';
        }).catch((error) => {
            console.error('Error parsing daily question:', error);
            questionMessage.textContent = 'Error parsing daily question.';
        });
    };

    questionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        handleParseDailyQuestion();
    });
};

document.addEventListener('DOMContentLoaded', (event) => {
    initParseDailyQuestion();
});
