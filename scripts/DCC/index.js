const testsLogger = (label, tests) => {
  const msgStyle = ({
    bg = "555522",
    color = "ffff55",
    pad = "3px 6px"
  } = {}) => {
    return `background: #${bg}; color: #${color}; padding: ${pad}`
  }

  // Only using this to ensure spacing on both sides
  const msgText = (text) => `%c ${text} `

  console.group(msgText(`--- ${label} ---`), msgStyle({pad: "5px 12px"}))

  tests.forEach((test, index) => {
    const guess = Array.isArray(test.guess) ? test.guess.toString() : test.guess
    const answer = Array.isArray(test.answer) ? test.answer.toString() : test.answer

    if (guess === answer) {
      console.log(msgText(`${index}. ${test.guess} CORRECT!`), msgStyle({bg: "225522", color: "55ff55"}))
    } else {
      console.log(msgText(`${index}. ${test.guess} Expected ${test.answer}`), msgStyle({bg: "552222", color: "ff5555"}))
    }
  })

  console.groupEnd()
}
