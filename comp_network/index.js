
import * as graphGenerator from './Generators/random_node.js' 
import * as endosrenyl from './Generators/erdos-renyi.js'
import * as genedge from './Generators/edge_gen.js'
import * as kruskal from './Algorithms/kruskal.js'
document.getElementById("graphGenerator").addEventListener('click', () => {
          let size = document.getElementById("sizeInput").value;
          if (size === "") {
            size = 2;
          }
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
document.getElementById("kruskal").addEventListener('click', () => {
          console.log("kruskal uygulandı");
          //kruskal.kruskalAlgorithm();

        }
      ) ;

