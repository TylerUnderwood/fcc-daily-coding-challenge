/**
 * Given a 2D grid, a starting position ([row, col]), and a new value, replace the value at the starting position and all connected cells of the same value with the new value.
 *
 * Cells are connected if they are adjacent horizontally or vertically (not diagonally).
 * Return the updated grid.
 */

testsLogger("bucketFill", [
    { guess: bucketFill([["R", "G"], ["R", "G"]], [0, 1], "B"), answer: [["R", "B"], ["R", "B"]] },
    { guess: bucketFill([["Y", "G", "G"], ["Y", "Y", "Y"], ["B", "Y", "R"]], [1, 2], "B"), answer: [["B", "G", "G"], ["B", "B", "B"], ["B", "B", "R"]] },
    { guess: bucketFill([["O", "O", "P"], ["P", "O", "O"], ["P", "P", "O"]], [2, 0], "R"), answer: [["O", "O", "P"], ["R", "O", "O"], ["R", "R", "O"]] },
    { guess: bucketFill([["T", "T", "R", "T"], ["R", "T", "R", "T"], ["R", "T", "R", "T"], ["T", "T", "T", "T"]], [0, 3], "Y"), answer: [["Y", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["Y", "Y", "Y", "Y"]] },
    { guess: bucketFill([["G", "B", "G", "B"], ["R", "B", "B", "G"], ["B", "G", "B", "R"], ["B", "G", "G", "B"]], [2, 2], "G"), answer: [["G", "G", "G", "B"], ["R", "G", "G", "G"], ["B", "G", "G", "R"], ["B", "G", "G", "B"]] }
])
