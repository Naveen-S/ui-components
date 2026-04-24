// https://leetcode.com/problems/rotting-oranges/

/* 
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let q = [];
  let minutes = 0;
  // Traverse through grid to populate initial q. 
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 2) {
        q.push([i, j, minutes]);
      }
    }
  }

  // Loop until they are items in q.
  while (q.length) {
    console.log(grid[0]);
    console.log(grid[1]);
    console.log(grid[2]);

    let [x, y, min] = q.shift();
    // left
    if (x > 0 && grid[x - 1][y] == 1) {
      grid[x - 1][y] = 2;
      q.push([x - 1, y, min + 1]);
    }
    // right
    if (x < m - 1 && grid[x + 1][y] == 1) {
      grid[x + 1][y] = 2;
      q.push([x + 1, y, min + 1]);
    }
    // top
    if (y > 0 && grid[x][y - 1] == 1) {
      grid[x][y - 1] = 2;
      q.push([x, y - 1, min + 1]);
    }
    // bottom
    if (y < n - 1 && grid[x][y + 1] == 1) {
      grid[x][y + 1] = 2;
      q.push([x, y + 1, min + 1]);
    }
    console.log('minutes ', min);
    console.log('---------------');
    minutes = Math.max(minutes, min);
  }

  // Check if grid has any fresh orange.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return minutes;
};