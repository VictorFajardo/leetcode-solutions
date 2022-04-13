/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let left = 0
  let top = 0
  let right = n - 1
  let bottom = n - 1
  
  let i = 0
  let j = 0
  const directions = [[0,1], [1,0], [0, -1], [-1, 0]]
  
  const matrix = new Array(n).fill(0).map(() => new Array(n))
  let counter = 1
  
  while (counter <= n * n) {
      for (let i = left; i <= right; i++) {
          matrix[top][i] = counter
          counter++
      }
      top++

      for (let i = top; i <= bottom; i++) {
          matrix[i][right] = counter
          counter++
      }
      right--

      for (let i = right; i >= left; i--) {
          matrix[bottom][i] = counter
          counter++
      }
      bottom--

      for (let i = bottom; i >= top; i--) {
          matrix[i][left] = counter
          counter++
      }
      left++
  }
    
    return matrix
};