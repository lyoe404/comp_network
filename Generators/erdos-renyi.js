
export function erdosRenylModel(nodes, probability) {
  let edges = [];
  
  for (let i = 0; i < nodes; i++) {
      for (let j = i + 1; j < nodes; j++) {
          let rand = Math.random();
          if (rand < probability) {
              edges.push([i, j]);
          }
      }
  }
  return edges;
}

