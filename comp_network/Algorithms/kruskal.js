class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = Array(size).fill(0);
    }

    find(node) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]); // Path compression
        }
        return this.parent[node];
    }

    union(node1, node2) {
        const root1 = this.find(node1);
        const root2 = this.find(node2);

        if (root1 !== root2) {
            if (this.rank[root1] > this.rank[root2]) {
                this.parent[root2] = root1;
            } else if (this.rank[root1] < this.rank[root2]) {
                this.parent[root1] = root2;
            } else {
                this.parent[root2] = root1;
                this.rank[root1]++;
            }
            return true;
        }
        return false;
    }
}

export function kruskalAlgorithm(nodes, edges) {
    // Sort edges by weight
    edges.sort((a, b) => a.weight - b.weight);

    const unionFind = new UnionFind(nodes.length);
    const mst = [];

    for (const edge of edges) {
        if (unionFind.union(edge.start, edge.end)) {
            mst.push(edge);
        }
        // Stop if we already have enough edges for a MST
        if (mst.length === nodes.length - 1) break;
    }

    return mst;
}