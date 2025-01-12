import * as genedge from "../Generators/edge_gen.js"

export function noNullNode(nodeList , size ) {

for (let i = 0 ; i < nodeList.length ; i++) {
      if (nodeList[i].node_connections[0] == null ) {
        
        var destNode = Math.floor(Math.random() * (size ));
        if (i == destNode) destNode ++ ; 
        
          genedge.edge_gen(i,destNode,size);
      }

}


}