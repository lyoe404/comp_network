import * as graphGenerator from './Generators/random_node.js' 
import * as endosrenyl from './Generators/erdos-renyi.js'
import * as dijkstra from './Algorithms/dijkstra.js'
import { edge_genMultiplexer } from './Util/edge_genMultiplexer.js'
import * as barabasi_albert from './Generators/barabasi_albert.js'
import * as randomnode from './Generators/random_node.js'
import * as edgewidth from './Util/edgewidth.js'
import * as nonull from './Util/nonull_node.js'
import * as cleaner from './Util/edge_cleaner.js'

let size ;
let checker = true ; 
document.getElementById("graphGenerator").addEventListener('click', () => {
  size = document.getElementById("node_count").value ; 
  size = size || 30 ; 

         graphGenerator.graphGenerator(size) ;
        } 
      ) ; 
document.getElementById("paint").addEventListener('click', () =>  {
  cleaner.edgeCleaner();
  edgewidth.cleaner() ; 
  let param_val = document.getElementById("params").value
  let type =  document.getElementById("type").value;
  if (type == "Endos") {
    param_val = param_val || 0.2 ; 

    edge_genMultiplexer(endosrenyl.erdosRenylModel(size,param_val),size) ; 
    nonull.noNullNode(randomnode.nodeList , size );
    console.log(graphGenerator.nodeList);
    checker = false ; 
  }
  if (type == "Barabasi") {
    param_val = param_val || 2 ; 
    barabasi_albert.barabasiAlbert(size,param_val) ;
    checker = false ; 
  }
}) ; 

document.getElementById("calculate").addEventListener('click' , () => {
  edgewidth.reverseParser() ; 
  if (checker)  {
      checker = false ; 
    dijkstra.reverseAbsolutePath() ;} 
    checker = true ; 
  for (let i = 0 ; i < size ; i ++) {
     edgewidth.findEdges(i);
   }
   let startNode = document.getElementById("startNode").value ; 
   let destNode = document.getElementById("destNode").value ; 
   startNode = startNode || 0 ; 
   destNode = destNode || 1 ; 
   if (startNode > size - 1 || destNode > size - 1 || startNode == destNode) {
    startNode = 0 ; 
    destNode = 1 ; 
   } 

       dijkstra.dijkstra(startNode,destNode,randomnode.nodeList);  
});
document.getElementById("type").addEventListener("change" , () => {

document.getElementById("params").placeholder = "range<size" ; 


})
