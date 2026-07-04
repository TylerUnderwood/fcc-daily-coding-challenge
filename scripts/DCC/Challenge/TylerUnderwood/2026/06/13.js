// Example:
// getZoneViolations([
//    ["R", "R", "C", "R", "R"],
//    ["R", "I", "C", "", "A"],
//    ["R", "R", "", "i", "A"]]
// )
// should return [[0, 1], [0, 2], [0, 3]].

// List of not allowed zone  adjacent zones
const zoneAdjacentRestrictions = {
    "i": ["R", "I"], // industrial
    "A": ["C"],      // agricultural
    "R": ["i", "C"], // residential
    "I": ["i"],      // institutional
    "C": ["R", "A"], // commercial
    "": []           // undeveloped
}

function getZoneViolations(grid) {
    // Violations should be returned as an array of [row, col] pairs
    const violations = []

    const findCellViolations = (cell, rowIndex) => {
        cell.forEach((zone, colIndex) => {
            const adjacentRestrictions = zoneAdjacentRestrictions[zone] || []
            const adjacentZones = [
                cell[colIndex - 1],
                cell[colIndex + 1],
                grid[rowIndex - 1]?.[colIndex],
                grid[rowIndex + 1]?.[colIndex]
            ]
            let allZonesClear = true
            let i = 0

            while (i < adjacentZones.length) {
                if (adjacentRestrictions.includes(adjacentZones[i])) {
                    allZonesClear = false
                    break
                }
                i++
            }

            if (!allZonesClear) {
                violations.push([rowIndex, colIndex])
            }
        })
    }

    grid.forEach((row, rowIndex) => {
        findCellViolations(row, rowIndex)
    })

    return violations
}
