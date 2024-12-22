
import * as graphGenerator from './Generators/random_node.js' 
import * as endosrenyl from './Generators/erdos-renyi.js'
import * as genedge from './Generators/edge_gen.js'
let size = 12 ; 
document.getElementById("graphGenerator").addEventListener('click', () => {
          graphGenerator.graphGenerator(size) ; // GRAPHGENERATOR BY ENTERING SIZE(BEYLER BURDA SIZE YAZIYOR SIZEYI YUKARDAN DEGİSTİRİP DENEYEBİLİRSİNİZ)
          
          endosrenyl.erdosRenylModel() ; // endos-renyi not completed

          // GOKOMODEL (BEYLER BU HER NODEYİ DİĞER HER NODLARA BAĞLIYOR ÖLE BİŞİ )
          for (var i = 1 ; i <= size ; i++) {

            for (var j = i+1 ; j <= size ; j ++ )

                  genedge.edge_gen(i,j,size);
          }

       console.log(genedge.edgeList);
        }
       
      ) ; 

