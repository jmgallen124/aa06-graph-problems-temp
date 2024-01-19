function getNeighbors(row, col, graph) {
  let results = []

  const directions = [[-1, 0], [0, -1], [0,1], [1,0]]

  for (const [dr, dc] of directions) {
    const newRow = row + dr
    const newCol = col + dc

    if (newRow >= 0 && newRow < graph.length && newCol >= 0 && newCol < graph[0].length) {
      if (graph[newRow][newCol] === 1) results.push([newRow, newCol])
    }
  }

  return results
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here 
}

module.exports = [getNeighbors, islandSize];
