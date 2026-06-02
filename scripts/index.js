// INITIALIZE CHALLENGE

// Expects type Date, returns type String (yyyy-mm-dd)
const dateFormatter = (date) => {
    return date.toISOString().split('T')[0]
}

const scriptPath = (folder, date) => {
    return `./scripts/DCC/${folder}/${date}.js`
}

const addChallengeScript = (folder, date) => {
    const script = document.createElement('script')

    script.src = scriptPath(folder, date)
    script.type = 'text/javascript'
    script.async = true // Prevents the script from blocking HTML parsing

    document.head.appendChild(script)
}

const updateDisplayElements = (user, date) => {
    const currentUserElements =
        document.querySelectorAll('.js__showCurrentUser') // HTMLElement
    const currentDateElements =
        document.querySelectorAll('.js__showCurrentDate') // HTMLElement

    const fillDisplayElements = (elems, text) => {
        elems.forEach((elem) => {
            elem.insertAdjacentHTML('beforeend', `
                <code class="Code">${text}</code>
            `);
        })
    }

    fillDisplayElements(currentUserElements, user)
    fillDisplayElements(currentDateElements, date)
}

// Init Challenge
const initChallengeSetup = (defaultUser) => {
    const form =
        document.getElementById('challengerSetupForm') // HTMLFormElement
    const userSelect =
        document.getElementById('userSelect') // HTMLInputElement
    const dateSelect =
        document.getElementById('dateSelect') // HTMLInputElement
    const storedUser = localStorage.getItem('user')
    const storedDate = localStorage.getItem('date')

    let user = storedUser || defaultUser // String (no spaces)
    let date = storedDate || dateFormatter(new Date()) // String (yyyy-mm-dd)

    updateDisplayElements(user, date)

    // Setup form element defaults
    userSelect.value = ''
    dateSelect.value = date

    // Init form
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        // Store the item in localStorage (Key, Value)
        localStorage.setItem('user', userSelect.value)
        localStorage.setItem('date', dateSelect.value)

        location.reload()
    })

    // build scripts
    addChallengeScript(user, date)
    addChallengeScript('Question', date)
}

// Add users from datalist to footer
const initChallengerList = () => {
    const userNamesDataList =
        document.getElementById('userNamesDataList') // HTMLDataListElement
    const challengersGithubList =
        document.getElementById('challengersGithubList') // HTMLUListElement
    const userNames =
        Array.from(userNamesDataList.options).map(option => option.value)

    userNames.forEach((name) => {
        challengersGithubList.insertAdjacentHTML('beforeend', `
            <li><a href="https://github.com/${name}" class="Link">${name} &#x1F86D;</a></li>
        `);
    })
}

// Init all the things
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('--- INITIALIZING ---')

    initChallengerList()

    initChallengeSetup('TylerUnderwood')
});
