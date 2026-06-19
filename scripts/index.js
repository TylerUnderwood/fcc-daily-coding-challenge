// INITIALIZE CHALLENGE
const defaultUser = 'TylerUnderwood'

// Expects type Date, returns type String (yyyy-mm-dd)
const dateFormatter = (date) => {
    return date.toISOString().split('T')[0]
}

// Not using this right now, but I wanna work towards using TypeScript
const checkDateFormat = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/
    return regex.test(dateString)
}

// Update daily link in header
const updateDailyLink = (date) => {
    const dailyLink = document.getElementById('todaysChallenge')
    if (dailyLink) {
        dailyLink.href = `https://www.freecodecamp.dev/learn/daily-coding-challenge/${date}`
    }
}

// Add users from datalist to footer
const fillChallengerList = () => {
    const userNamesDataList =
        document.getElementById('userNamesDataList') // HTMLDataListElement
    const challengersGithubList =
        document.getElementById('challengersGithubList') // HTMLUListElement
    const userNames =
        Array.from(userNamesDataList.options).map(option => option.value)

    userNames.forEach((name) => {
        challengersGithubList.insertAdjacentHTML('beforeend', `
<li>
    <a href="https://github.com/${name}" class="Link" target="_blank" rel="noopener noreferrer">
        ${name} &#x1F86D;
    </a>
</li>
        `);
    })
}

const fillDisplayElements = (user, date) => {
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

    // Set user
    fillDisplayElements(currentUserElements, user)
    // Set date
    fillDisplayElements(currentDateElements, date)
}

// Get Challenge Data
const getChallengeData = () => {
    const storedUser = localStorage.getItem('user')
    const storedDate = localStorage.getItem('date')
    const allowResetDate = Boolean(localStorage.getItem('allowResetDate') === 'true')
    const lastDateReset = localStorage.getItem('lastDateReset')
    const today = dateFormatter(new Date())

    let user = storedUser || defaultUser // String (no spaces)
    let date = storedDate || today // String (yyyy-mm-dd)

    // If storage is a day old, set the date to today
    if (allowResetDate && lastDateReset !== today && storedDate !== today) {
        date = today
        localStorage.setItem('date', today)
        localStorage.setItem('lastDateReset', today)
        console.warn(`As requested, the date has been reset to today`)
    }

    return { user, date }
}

// Init Challenge Form
const initChallengeForm = (date) => {
    const form =
        document.getElementById('challengerSetupForm') // HTMLFormElement
    const userSelect =
        document.getElementById('userSelect') // HTMLInputElement
    const dateSelect =
        document.getElementById('dateSelect') // HTMLInputElement
    const resetDateToggle =
        document.getElementById('resetDateToggle') // HTMLInputElement

    // Setup form element defaults
    userSelect.value = ''
    dateSelect.value = date
    resetDateToggle.checked = localStorage.getItem('allowResetDate') === 'true'

    // Init form
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        // Store the item in localStorage (Key, Value)
        if (userSelect.value.trim() !== '') {
            localStorage.setItem('user', userSelect.value)
        }
        if (dateSelect.value.trim() !== '') {
            localStorage.setItem('date', dateSelect.value)
        }
        localStorage.setItem('allowResetDate', resetDateToggle.checked)

        location.reload()
    })

    // On reset, clear the stored user and date
    // We don't clear the allowResetDate flag here, that should persist
    form.addEventListener('reset', (event) => {
        event.preventDefault()

        localStorage.removeItem('user')
        localStorage.removeItem('date')

        location.reload()
    })
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

    // Wait for the script to load
    return new Promise((resolve, reject) => {
        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load challenge script for ${folder} on ${date}`))
    })
}

// Init all the things
document.addEventListener('DOMContentLoaded', (event) => {
    const { user, date } = getChallengeData()

    console.log(`--- CHALLENGE DATA ---`)
    console.log(`User: ${user}`)
    console.log(`Date: ${date}`)
    console.log(`----------------------`)

    updateDailyLink(date)

    fillDisplayElements(user, date)

    fillChallengerList()

    initChallengeForm(date)

    // Build challenger answer scripts first
    const userScriptPromise = addChallengeScript(user, date)

    // Then build the question script, since it depends on the answer script
    userScriptPromise.then(() => {
        console.time(`Challenge Script Speed`)
        let questionScriptPromise = addChallengeScript('Question', date)

        questionScriptPromise.then(() => {
            console.timeEnd(`Challenge Script Speed`)
        })
    })
});
