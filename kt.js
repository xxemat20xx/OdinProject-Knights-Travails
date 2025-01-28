function knightMoves(start, end) {
    const knightDirections = [
        [1, 2], [2, 1], [2, -1], [1, -2],
        [-1, -2], [-2, -1], [-2, 1], [-1, 2]
    ];

    // Queue for BFS
    let queue = [[start]];
    let visited = new Set();
    visited.add(start.join(','));

    while (queue.length > 0) {
        let path = queue.shift();
        let currentPos = path[path.length - 1];

        if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
            // Log the result
            console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
            path.forEach(pos => console.log(pos));
            return path;
        }

        for (let dir of knightDirections) {
            let newX = currentPos[0] + dir[0];
            let newY = currentPos[1] + dir[1];
            let newPos = [newX, newY];

            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                if (!visited.has(newPos.join(','))) {
                    visited.add(newPos.join(','));
                    let newPath = [...path, newPos];
                    queue.push(newPath);
                }
            }
        }
    }

    // If no path found
    console.log("No path found.");
    return null;
}

// Example usage
knightMoves([3,3], [4,3]);  
// Output: You made it in 3 moves!  Here's your path:
//         [3,3]
//         [4,5]
//         [2,4]
//         [4,3]
