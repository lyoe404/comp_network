import * as genedge from "../Generators/edge_gen.js"

// USE CASE FOR MULTİPLE USE OF EDGE_GEN
  export function edge_genMultiplexer(array,size) {
        genedge.cleaner() ; 
  for (var i = 0 ; i < array.length ; i++) {
      genedge.edge_gen(array[i][0],array[i][1],size) ;     
  }; 
}