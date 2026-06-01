// Init main form
const initChallengeSetup = (defaultUser) => {
    const currentlyTestingScript =
        document.getElementById('currentlyTestingScript') // HTMLScriptElement
    const currentQuestionScript =
        document.getElementById('currentQuestionScript') // HTMLScriptElement
    const userSelect =
        document.getElementById('userSelect') // HTMLInputElement
    const dateSelect =
        document.getElementById('dateSelect') // HTMLInputElement
    const currentUserElements =
        document.querySelectorAll('.js__showCurrentUser') // HTMLElement
    const currentDateElements =
        document.querySelectorAll('.js__showCurrentDate') // HTMLElement

    // Expects type Date, returns type String (yyyy-mm-dd)
    const dateFormatter = (_date) => {
        return _date.toISOString().split('T')[0]
    }

    let user = defaultUser // String (no spaces)
    let date = dateFormatter(new Date()) // String (yyyy-mm-dd)

    userSelect.value = ''
    dateSelect.value = date

    const fillDisplayElements = (elems, text) => {
        elems.forEach((elem) => {
            elem.insertAdjacentHTML('beforeend', `
                <code class="Code">${text}</code>
            `);
        })
    }
    fillDisplayElements(currentUserElements, user)
    fillDisplayElements(currentDateElements, date)

    const scriptPathConcat = (folder, date) => {
        return `./scripts/DCC/${folder}/${date}.js`
    }

    // currentlyTestingScript.src = scriptPathConcat(user, date)
    // currentQuestionScript.src = scriptPathConcat('Question', date)

    userSelect.addEventListener('change', (event) => {
        console.log('event:', event.target)
        console.log('userSelect:', userSelect.value)
    });

    dateSelect.addEventListener('change', (event) => {
        console.log('event:', event.target)
        console.log('dateSelect:', dateSelect.value)
    });
}

// Add users from datalist to footer
const initChallengerList = () => {
    const userNamesDataList =
        document.getElementById('userNamesDataList') // HTMLDataListElement
    const challengersGithubList =
        document.getElementById('challengersGithubList') // HTMLUListElement
    const userNames = Array.from(userNamesDataList.options).map(option => option.value)

    userNames.forEach((name) => {
        challengersGithubList.insertAdjacentHTML('beforeend', `
            <li><a href="https://github.com/${name}" class="Link">${name} &#x1F86D;</a></li>
        `);
    })
}

// Init all the things
document.addEventListener("DOMContentLoaded", (event) => {
    console.log('--- INITIALIZING ---')

    initChallengerList()

    initChallengeSetup('TylerUnderwood')
});
