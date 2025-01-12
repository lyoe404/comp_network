import * as nodeList from "../Generators/random_node.js"
import * as absolute_path_tool from "../Util/absolute_path.js"
let pathInfo = [] ; 
let absolute_path = [] ; 
let backUpAbsolutePath = [] ; 
let visitList = [] ; 
export function dijkstra(startNode, endNode, nodeInfo) {
        absolute_path = []
        visitList =  [] ; 
        pathInfo = [] ; 
        pathInfo = initPathConfig(startNode,nodeInfo.length) ;
        visit(startNode,nodeInfo) ;   
              let temp_distance = Infinity ; 
              let temp_node = null ; 

                  for (var j = 0 ; j < pathInfo.length ; j++) {
                    temp_distance = Infinity ; 
               for (var i = 0 ; i < pathInfo.length ; i++) {
                if (pathInfo[i].shortest_distance < temp_distance && i != startNode && nodeInfo[i].visited == false) {
                  temp_distance = pathInfo[i].shortest_distance ; 
                  temp_node = i ; 
                };
              };
                visit(temp_node,nodeInfo); 
                  }
                  var temp_endNode = endNode ; 
                  absolute_path.push(endNode);
                for (let i = 0 ; i < 500 ; i++) {
                  if (pathInfo[temp_endNode].previous_node != startNode) {
                      absolute_path.push(pathInfo[temp_endNode].previous_node);
                      temp_endNode = pathInfo[temp_endNode].previous_node;
                  }
                  if (pathInfo[temp_endNode].previous_node == startNode) {
                    absolute_path.push(startNode);
                    break;
                  }
                }
                console.log("pathInfo",pathInfo);
                console.log("absolute",absolute_path);
                backUpAbsolutePath = absolute_path ; 
                absolute_path_tool.absolutePath(absolute_path);
                
};

  function visit(currentNode,nodeInfo) {
    console.log("length",nodeInfo[currentNode].node_connections.length );

      for (let i = 0 ; i < nodeInfo[currentNode].node_connections.length ; i++) {
        const [ node_id , distance ]= nodeInfo[currentNode].node_connections[i].match(/\d+/g).map(Number);
        
              if (nodeInfo[node_id].visited == false) {
               
                if (pathInfo[currentNode].shortest_distance + distance < pathInfo[node_id].shortest_distance) {
                      pathInfo[node_id].shortest_distance = pathInfo[currentNode].shortest_distance + distance ; 
                      pathInfo[node_id].previous_node = currentNode ; 
                }
           }
      }
      // GLOBAL VAR 
      visitList.push(currentNode) ; 
      nodeList.nodeList[currentNode].visited = true ; 
  };


function initPathConfig(startNode,size) {
      var array =  [] ; 
        for (let i = 0 ; i < size ; i ++) {
              array.push({
                    shortest_distance : Infinity , 
                    previous_node : null 
              }) ; 
        }
        array[startNode] = {
          shortest_distance : 0 , 
          previous_node : null 
    } ; 
        return array ; 
}
export function reverseAbsolutePath() {
  if (backUpAbsolutePath[0] != null) {
    console.log("calistibackupabsolue",backUpAbsolutePath);
    absolute_path_tool.reverseAbsolutePath(backUpAbsolutePath) ; 
  }
  
}