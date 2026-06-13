testsLogger(
  "getJetLagHours",
  [
    {guess: getJetLagHours("Istanbul", "Hong Kong", 10, "east"), answer: 6.5},
    {guess: getJetLagHours("London", "New York", 8, "west"), answer: 5.8},
    {guess: getJetLagHours("Hong Kong", "Tokyo", 4, "east"), answer: 1.6},
    {guess: getJetLagHours("Dubai", "London", 7, "west"), answer: 4.7},
    {guess: getJetLagHours("Los Angeles", "Hong Kong", 15, "west"), answer: 17.5},
    {guess: getJetLagHours("Tokyo", "Dubai", 9, "west"), answer: 5.9},
    {guess: getJetLagHours("New York", "Istanbul", 10, "east"), answer: 9.5},
  ]
)
