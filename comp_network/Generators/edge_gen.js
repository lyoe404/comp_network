import * as graphInfo from './random_node.js'

export let edgeList = [] ; 

export function edge_gen(rootId, destId, size) {
    size = size || 0;
    rootId = `node${rootId}`;
    destId = `node${destId}`;

    var nodeList = graphInfo.nodeList;
    var rootNode, destNode;
    var count = 0;

    // Noktaları bul
    for (var i = 0; i <= size; i++) {
        if (rootId == nodeList[i].node_id) {
            rootNode = nodeList[i];
            count++;
        }
        if (destId == nodeList[i].node_id) {
            destNode = nodeList[i];
            count++;
        }
        if (count == 2) break;
    }

    // Çizgi oluştur
    var edge = document.createElement("div");
    edge.id = `edge${rootNode.node_id + destNode.node_id}`; // değiştirilecek bu şuanlık edge idsi 
    edgeList.push(edge.id);
    edge.className = "edges";   
    // Başlangıç noktası
    const x1 = rootNode.nodeLeft + 7 ; // offset çekiyoruz css üzerinde .edges classındaki width height yarısı
    const y1 = rootNode.nodeTop + 7 ;
    const x2 = destNode.nodeLeft + 7 ;
    const y2 = destNode.nodeTop + 7 ;
    // Uzunluk ve açı hesapla
    var length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    var angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
    // CSS özelliklerini ayarla
    edge.style.position = "absolute";
    edge.style.left = `${x1}px`;
    edge.style.top = `${y1}px`;
    edge.style.width = `${length}px`;
    edge.style.height = "2px"; // Çizgi kalınlığı
    edge.style.transformOrigin = "0 50%"; // Uçtan döndürme
    edge.style.transform = `rotate(${angle}deg)`;

    rootNode.node_neighbours.push(destNode.node_id);
    destNode.node_neighbours.push(rootNode.node_id);
    rootNode.node_connections.push(edge.id);
    destNode.node_connections.push(edge.id);
    // DOM'a ekle
    document.getElementById("node_area").appendChild(edge);
}
