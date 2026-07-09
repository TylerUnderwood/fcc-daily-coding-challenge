function bucketFill(grid, [row, col], newValue) {
  const oldValue = grid[row][col];
  if (oldValue === newValue) {
    return grid;
  }

  // Replace the value at the starting position
  grid[row][col] = newValue;

  // Check adjacent cells
  const rows = grid.length;
  const cols = grid[0].length;

  // Check the cell above
  if (row > 0 && grid[row - 1][col] === oldValue) {
    bucketFill(grid, [row - 1, col], newValue);
  }
  // Check the cell below
  if (row < rows - 1 && grid[row + 1][col] === oldValue) {
    bucketFill(grid, [row + 1, col], newValue);
  }
  // Check the cell to the left
  if (col > 0 && grid[row][col - 1] === oldValue) {
    bucketFill(grid, [row, col - 1], newValue);
  }
  // Check the cell to the right
  if (col < cols - 1 && grid[row][col + 1] === oldValue) {
    bucketFill(grid, [row, col + 1], newValue);
  }

  return grid;
}
