// An object that maps each building type to its violating neighbors.
let restrictionsOfType = {
  "i": ["R", "I"],
  "A": ["C"],
  "R": ["i", "C"],
  "I": ["i"],
  "C": ["R", "A"],
  "": []
}

// Function to get the contents of a cell from its coordinates.
function cellFromCoords(coords, grid) {
  let [x, y] = coords

  try {
    return grid[y][x]
  } catch {
    return null
  }
}

// This function checks all neighbors of a cell and compares it to that cell's list of violating neighbors. Returns false if it finds a violation, true if not.
function validNeighbors(neighbors, cell, grid) {
  for (let coords of neighbors) {
    if (cellFromCoords(coords, grid) !== null) {
      if (restrictionsOfType[cell].includes(cellFromCoords(coords, grid))) {
        return false
      }
    }
  }

  return true
}

function getZoneViolations(grid) {
  let violations = []
  let neighbors = []

  // Using forloops, we can lable each row by its iterator.
  for (let y = 0; y < grid.length; y++) { // y = Columns
    for (let x = 0; x < grid[0].length; x++) { // x = Rows
      neighbors = [[x, y-1], [x, y+1], [x-1, y], [x+1, y]]
      if (validNeighbors(neighbors, grid[y][x], grid) === false) {
        violations.push([y, x]) // Tests want results to be backwards for some reason?
      }
    }
  }

  console.log(violations)
  return violations;
}