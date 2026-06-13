const zoneRules = {
  "i": ["R", "I"], // industrial
  "A": ["C"],      // agricultural
  "R": ["i", "C"], // residential
  "I": ["i"],      // institutional
  "C": ["R", "A"], // commercial
  "": []           // undeveloped
}


function getZoneViolations(grid) {
  const violations = []

  return violations
}
