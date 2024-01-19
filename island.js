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

  const startNode = [row, col];

  // Create a visited set to store visited nodes
  // Put the stringified starting node in visited
  const visited = new Set().add(startNode.join(','));

  // Create a stack, put the starting node in the stack
  const s = [startNode];

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (s.length) {

    // Pop the first node
    const curr = s.pop();

    // DO THE THING (increment size by 1)
    size++;

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    const neighbors = getNeighbors(...curr, graph);

    neighbors.forEach(neighbor => {

      const strNeighbor = neighbor.join(',');

      if (!visited.has(strNeighbor)) {

          s.push(neighbor);
          visited.add(strNeighbor);

      };

  });

  };

  // return size
  return size;

};

// matrix = [
//   [1,1,1,0,0],
//   [0,1,1,0,1],
//   [0,1,1,0,1],
// ]

// console.log(islandSize(0, 0, matrix));  // 7
// console.log(islandSize(2, 4, matrix));  // 2

module.exports = [getNeighbors, islandSize];
