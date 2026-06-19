const utcOffset = {
    "Los Angeles": -8,
    "New York": -5,
    "London": 0,
    "Istanbul": +3,
    "Dubai": +4,
    "Hong Kong": +8,
    "Tokyo": +9,
}

const directionMultipliers = {
  "east": 1.5,
  "west": 1
}

function getJetLagHours(departureCity, arrivalCity, flightDuration, direction) {
    const timezoneDifference = Math.abs(utcOffset[departureCity] - utcOffset[arrivalCity])
    const directionMultiplier = directionMultipliers[direction]
    const lagTime = timezoneDifference + (flightDuration * 0.1) * directionMultiplier

    return lagTime
}
