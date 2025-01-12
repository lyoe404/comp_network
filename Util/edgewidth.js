import * as nodeInfo from "../Generators/random_node.js"
export let neigborDest = [] ; 
export let backUp = [] ; 
export function findEdges(nodeId) {
  var currentNodeDest = [] ;
 for (let i = 0 ; i < nodeInfo.nodeList[nodeId].node_connections.length ; i++) {

  let data =  parseEdgeString(nodeInfo.nodeList[nodeId].node_connections[i]);
  if (data.dest == nodeId) {
    var tempdata = data.root ; 
    data.root = data.dest ; 
    data.dest = tempdata ; 
  }
                      currentNodeDest.push(
                        `${data.dest}+${document.getElementById(nodeInfo.nodeList[nodeId].node_connections[i]).style.width}`
                   );
            }
            backUp.push(
              nodeInfo.nodeList[nodeId].node_connections
            );
            nodeInfo.nodeList[nodeId].node_connections = currentNodeDest ;

}

function parseEdgeString(edgeString) {
    // Regex ile root ve dest değerlerini ayıklıyoruz
    const match = edgeString.match(/edge(\d+)\+(\d+)/);
    if (!match) {
        throw new Error("Geçersiz format");
    }

    const root = parseInt(match[1], 10); // "edge"den sonra gelen sayı
    const dest = parseInt(match[2], 10); // "+" işaretinden sonra gelen sayı
      
    return { root, dest };
}
// dijkstra formatı

export function reverseParser() {
  if (backUp[0] != null) {
    console.log("backup",backUp) ; 
for (let i = 0 ; i < nodeInfo.nodeList.length ; i++) {
nodeInfo.nodeList[i].node_connections = backUp[i] ; 
      nodeInfo.nodeList[i].visited = false ; 
  }
  
}
}
export function cleaner () {
  backUp = [] ; 
}