// const graph = {
//   'a': ['b', 'c', 'e'],
//   'c': ['b', 'd'],
//   'b': [],
//   'd': [],
//   'e': ['a'],
//   'f': ['e']
// };



// const dfsFromNode = (graph, start, visited) => {
//   let stack = [start];

//   while(stack.length){
//     let node = stack.pop();
//     if(visited.has(node)) continue; 

//     visited.add(node);
//     let neighbors = graph[node];
//     neighbors.forEach(neighbor => {
//       stack.push(neighbor);
//     })
//   }
// }

// const dfsEntireGraph = (graph) => {
//   let visited = new Set();
//   for(let node in graph){
//     dfsFromNode(graph, node, visited);
//   }

//   return Array.from(visited);
// }

// console.log(dfsEntireGraph(graph));