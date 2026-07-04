testsLogger(
  "getZoneViolations",
  [
    {guess: getZoneViolations([["R", "C"], ["", "C"]]), answer: [[0, 0], [0, 1]]},
    {guess: getZoneViolations([["", "i"], ["", "R"], ["R", "I"]]), answer: [[0, 1], [1, 1]]},
    {guess: getZoneViolations([["A", "i", "C"], ["A", "", "C"], ["R", "R", "I"]]), answer: []},
    {guess: getZoneViolations([["R", "R", "C", "R", "R"], ["R", "I", "C", "", "A"], ["R", "R", "", "i", "A"]]), answer: [[0, 1], [0, 2], [0, 3]]},
    {guess: getZoneViolations([["R", "A", "A", "", "i", "i"], ["R", "I", "", "C", "i", "i"], ["R", "", "C", "C", "A", "A"], ["R", "R", "C", "I", "R", "R"]]), answer: [[2, 3], [2, 4], [3, 1], [3, 2]]},
  ]
)
