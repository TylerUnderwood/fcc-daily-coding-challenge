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
    let guess, answer;

    [test.guess, test.answer].forEach((val, i) => {
      if (Array.isArray(val)) {
        i === 0 ? guess = val.toString() : answer = val.toString()
      } else if (typeof val === "object") {
        i === 0 ? guess = JSON.stringify(val) : answer = JSON.stringify(val)
      } else {
        i === 0 ? guess = val : answer = val
      }
    })

    if (guess === answer) {
      console.log(msgText(`${index+1}. ${guess} CORRECT!`), msgStyle({bg: "225522", color: "55ff55"}))
    } else {
      console.log(msgText(`${index+1}. ${guess} Expected ${answer}`), msgStyle({bg: "552222", color: "ff5555"}))
    }
  })

  console.groupEnd()
}
