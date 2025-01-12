
import * as edgeGen from "../Generators/edge_gen.js"
import * as randomNode from "../Generators/random_node.js"
export function edgeCleaner() {
  console.log(edgeGen.edgeList) ; 
  
for (var i = 0 ; i < edgeGen.edgeList.length ; i++)
  {
    if (document.getElementById(edgeGen.edgeList[i])!= null){
      document.getElementById(edgeGen.edgeList[i]).remove();
    }
  }
    for (var i = 0 ; i < randomNode.nodeList.length ; i++ ) {
      randomNode.nodeList[i].node_connections = [] ; 
    }
    for (var i = 0 ; i < randomNode.nodeList.length ; i++) randomNode.nodeList[i].visited = false ; 
  edgeGen.cleaner();
} ; 