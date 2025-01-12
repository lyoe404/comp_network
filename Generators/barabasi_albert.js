import * as graphInfo from './random_node.js'; // Düğüm oluşturma ve diğer veriler için
import { createNewNode, nodeList } from './random_node.js';
import { edge_gen, cleaner } from './edge_gen.js';

export function barabasiAlbert(node_count, m) {
    m = m || 2; // Her yeni düğümün bağlanacağı düğüm sayısı
    if (m > node_count ) m = node_count % 5 ; 

    graphInfo.nodeListcleaner();
    cleaner();
    document.getElementById("node_area").innerHTML = "";

    // başlangıç
    for (let i = 0; i < m; i++) {
        createNewNode(i);
        for (let j = 0; j < i; j++) {
            edge_gen(i, j, m);
        }
    }

    for (let i = m; i < node_count; i++) { // derece hesaplaması 
        createNewNode(i);

        let degrees = nodeList.map(node => node.node_neighbours.length);
        let totalDegree = degrees.reduce((acc, degree) => acc + degree, 0);

        let connectedNodes = [];
        while (connectedNodes.length < m) {
            for (let j = 0; j < nodeList.length; j++) {
                if (connectedNodes.length >= m) break;
                let probability = degrees[j] / totalDegree;
                if (Math.random() < probability && !connectedNodes.includes(j)) {  // zar atma
                    connectedNodes.push(j);
                }
            }
        }

        // yolları çiz
        connectedNodes.forEach(destId => {
            edge_gen(i, destId, node_count);
        });
    }
}